import React from 'react';
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
    return (
        <Container>
            <DevBarber width={"100%"} height={"160px"}/>

            <InputArea>
                <SignInput IconSvg={EmailIcon}/>
                <SignInput IconSvg={LockIcon}/>

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