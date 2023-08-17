import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './../screens/Home';
import Search from './../screens/Search';
import Appointments from './../screens/Appointments';
import Favorites from './../screens/Favorites';
import Profile from './../screens/Profile';
import CustomTabBar from '../components/CustomTabBar';

const bottomTabNavigator = createBottomTabNavigator();

export default () => (
    <bottomTabNavigator.Navigator tabBar={props => <CustomTabBar {...props} />}
    >
        <bottomTabNavigator.Screen name={"Home"} component={Home}/>
        <bottomTabNavigator.Screen name={"Search"} component={Search}/>
        <bottomTabNavigator.Screen name={"Appointments"} component={Appointments}/>
        <bottomTabNavigator.Screen name={"Favorites"} component={Favorites}/>
        <bottomTabNavigator.Screen name={"Profile"} component={Profile}/>
    </bottomTabNavigator.Navigator>
);

