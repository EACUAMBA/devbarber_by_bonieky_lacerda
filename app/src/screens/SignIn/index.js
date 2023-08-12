import React, {useState} from 'react';
import {Text} from 'react-native';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignInMessageButton,
    SignInMessageButtonText,
    SignInMessageButtonTextBold
} from './styles';
import DevBarber from './../../assets/barber.svg';
import SignInput from './../../components/SignInput';
import EmailIcon from './../../assets/email.svg';
import LockIcon from './../../assets/lock.svg';

export default () => {
    const [emailField, setEmailField] = useState('edilson@gmail.com');
    const [passwordField, setPasswordField] = useState('');

    return (
        <Container>
            <DevBarber width={"100%"} height={"160px"}/>

            <InputArea>
                <SignInput IconSvg={EmailIcon} placeholder={"Digite o teu email."} value={emailField} onChangeText={(text) => setEmailField(text)}/>
                <SignInput IconSvg={LockIcon} placeholder={"Digite a tua senha."} value={passwordField} onChangeText={(text) => setPasswordField(text)} password={true}/>

                <CustomButton>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignInMessageButton>
                <SignInMessageButtonText>Ainda não possui uma conta?</SignInMessageButtonText>
                <SignInMessageButtonTextBold>Cadastre-se!</SignInMessageButtonTextBold>
            </SignInMessageButton>
        </Container>
    );
}