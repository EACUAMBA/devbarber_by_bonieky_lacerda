import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Preload from '../screens/Preload';
import SignIn from './../screens/SignIn';
import SignUp from './../screens/SignUp';
import MainTab from './MainTab';

const stackNavigator = createStackNavigator();

export default () => (
    <stackNavigator.Navigator
        initialRouteName={'Preload'}
        screenOptions={{
            headerShown: false
        }}
    >
        <stackNavigator.Screen name={"Preload"} component={Preload}/>
        <stackNavigator.Screen name={"SignIn"} component={SignIn}/>
        <stackNavigator.Screen name={"SignUp"} component={SignUp}/>
        <stackNavigator.Screen name={"MainTab"} component={MainTab}/>
    </stackNavigator.Navigator>
);