import React from 'react';
import {styled} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #63C2D1;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

/*
    InputArea,
    CustomButton,
    CustomButtonText,
    SignInMessageButton,
    SignInMessageButtonText,
    SignInMessageButtonTextBold
 */

export const InputArea = styled.View`
  padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #268596;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
export const CustomButtonText = styled.Text`
  font-size: 18px;
  text-transform: uppercase;
  color: #FFF
`;

export const SignInMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;
export const SignInMessageButtonText = styled.Text`
  font-size: 16px;
  color: #268596;
`;
export const SignInMessageButtonTextBold = styled.Text`
  margin-left: 5px;
  font-weight: bold;
  font-size: 16px;
  color: #268596;
`;