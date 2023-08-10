import React from 'react';
import {Text} from 'react-native';
import {Container} from './styles';
import DevBarber from './../../assets/barber.svg';

export default () => {
    return (
        <Container>
            <DevBarber width={"100%"} height={"160px"}/>
        </Container>
    );
}