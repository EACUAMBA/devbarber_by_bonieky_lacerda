import React, {useEffect, useContext} from 'react';
import {Container, LoadingIcon} from './styles';
import DevBarber from './../../assets/barber.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Api from './../../Api';
import {UserContext} from './../../contexts/UserContext';

export default () => {
    const {dispatch: userDispatch} = useContext(UserContext);
    const navigationHook = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem("token");
            if (token != null) {
                const res = await Api.checkToken(token);
                if(res.token){

                    await AsyncStorage.setItem("token", res.token);

                    userDispatch(
                        {
                            type: "setAvatar",
                            payload: res.data.avatar
                        }
                    );

                    navigationHook.reset({
                        routes: [{name: "MainTab"}]
                    })
                }else{
                    navigationHook.navigate("SignIn");
                }
            } else {
                navigationHook.navigate("SignIn");
            }
        }

        checkToken();
    }, []);

    return (
        <Container>
            <DevBarber width={"100%"} height={"160"}/>

            <LoadingIcon size={"large"} color={"#FFFFFF"}/>
        </Container>
    );
};