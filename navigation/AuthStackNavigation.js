import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthStack = createStackNavigator();

const AuthStackScreen = ({navigation}) => (
    <AuthStack.Navigator headerMode='none'> 
        <AuthStack.Screen name="SplashScreen" component={SplashScreen}/>      
        <AuthStack.Screen name="LoginScreen" component={LoginScreen}/>
        <AuthStack.Screen name="RegisterScreen" component={RegisterScreen}/>
    </AuthStack.Navigator>
);

export default AuthStackScreen;