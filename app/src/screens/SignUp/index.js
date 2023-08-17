import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
    Container,
    CustomButton,
    CustomButtonText,
    InputArea,
    SignInMessageButton,
    SignInMessageButtonText,
    SignInMessageButtonTextBold
} from './styles';
import DevBarber from './../../assets/barber.svg';
import SignInput from './../../components/SignInput';
import PersonIcon from './../../assets/person.svg';
import EmailIcon from './../../assets/email.svg';
import LockIcon from './../../assets/lock.svg';

import Api from './../../Api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {UserContext} from '../../contexts/UserContext'

export default () => {
    const navigation = useNavigation();
    const {dispatch: userDispatcher} = useContext(UserContext)

    const [nameField, setNameField] = useState('Edilson A. Cuamba');
    const [emailField, setEmailField] = useState('edilson@gmail.com');
    const [passwordField, setPasswordField] = useState('');

    function handleSignInMessageButtonClick() {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    async function handleSignClick() {
        if (nameField !== '' && emailField !== '' && passwordField !== '') {

            const responseJson = await Api.signUp(nameField, emailField, passwordField);

            if (responseJson.token) {
                await AsyncStorage.setItem('token', responseJson.token);

                userDispatcher({
                    type: 'setAvatar',
                    payload: responseJson.data.avatar
                })

                navigation.reset({
                    routes: [{name: "MainTab"}]
                })
            } else {
                alert("Not Working")
            }
        }
    }

    return (
        <Container>
            <DevBarber width={"100%"} height={"160px"}/>

            <InputArea>
                <SignInput IconSvg={PersonIcon} placeholder={"Digite o teu nome."} value={nameField}
                           onChangeText={(text) => setNameField(text)}/>
                <SignInput IconSvg={EmailIcon} placeholder={"Digite o teu email."} value={emailField}
                           onChangeText={(text) => setEmailField(text)}/>
                <SignInput IconSvg={LockIcon} placeholder={"Digite a tua senha."} value={passwordField}
                           onChangeText={(text) => setPasswordField(text)} password={true}/>

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignInMessageButton onPress={handleSignInMessageButtonClick}>
                <SignInMessageButtonText>Ainda não possui uma conta?</SignInMessageButtonText>
                <SignInMessageButtonTextBold>Autentique-se!</SignInMessageButtonTextBold>
            </SignInMessageButton>
        </Container>
    );
}