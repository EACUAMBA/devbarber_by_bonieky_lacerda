import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
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
import PersonIcon from './../../assets/person.svg';
import EmailIcon from './../../assets/email.svg';
import LockIcon from './../../assets/lock.svg';

export default () => {
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('Edilson A. Cuamba');
    const [emailField, setEmailField] = useState('edilson@gmail.com');
    const [passwordField, setPasswordField] = useState('');

    function handleSignInMessageButtonClick(){
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    function handleSignClick(){
        console.log("handleSignClick");
    }

    return (
        <Container>
            <DevBarber width={"100%"} height={"160px"}/>

            <InputArea>
                <SignInput IconSvg={PersonIcon} placeholder={"Digite o teu nome."} value={nameField} onChangeText={(text) => setNameField(text)}/>
                <SignInput IconSvg={EmailIcon} placeholder={"Digite o teu email."} value={emailField} onChangeText={(text) => setEmailField(text)}/>
                <SignInput IconSvg={LockIcon} placeholder={"Digite a tua senha."} value={passwordField} onChangeText={(text) => setPasswordField(text)} password={true}/>

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