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

import SignInput from './../../components/SignInput';

import DevBarber from './../../assets/barber.svg';
import EmailIcon from './../../assets/email.svg';
import LockIcon from './../../assets/lock.svg';

import Api from './../../Api';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../contexts/UserContext'

export default () => {
    const {dispatch: userDispatcher} = useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('edilson2023@gmail.com');
    const [passwordField, setPasswordField] = useState('12345');

    function handleSignInMessageButtonClick() {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }

    async function handleSignClick() {
        if (emailField !== '' && passwordField !== '') {
            const responseJson = await Api.signIn(emailField, passwordField);

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
                alert('Email ou senha incorectos!')
            }
        } else {
            alert("Preencha os campos pá.");
        }
    }

    return (
        <Container>
            <DevBarber width={"100%"} height={"160px"}/>

            <InputArea>
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
                <SignInMessageButtonTextBold>Cadastre-se!</SignInMessageButtonTextBold>
            </SignInMessageButton>
        </Container>
    );
}