import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {Container, LoadingIcon} from './styles';
import DevBarber from './../../assets/barber.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native'

export default () => {

    const navigationHook = useNavigation();

    useEffect(() => {
       const checkToken = async () =>{
           const token = await AsyncStorage.getItem("token");

           if(token != null){
               //validar se o token ainda é valido;
               console.log("tens token papa 😎! ", token)
           }else{
               //enviar o individuo para a página de login
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