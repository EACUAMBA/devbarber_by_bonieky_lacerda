import React from 'react';
import StackView from '@react-navigation/stack'

const Stack = StackView.createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Preload'} component={Preload}/>
      <Stack.Screen name={'SignIn'} component={SignIn}/>
      <Stack.Screen name={'SignUp'} component={SignUp}/>
    </Stack.Navigator>
  );
}

export default MainStack;
