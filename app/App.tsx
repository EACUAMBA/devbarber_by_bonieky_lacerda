import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';

//Contentor onde ficam todas as telas.
export default () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
