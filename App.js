import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from './navigation/DrawerNavigation'
import MainTabScreen from './navigation/MainTabNavigation';
import AuthStackScreen from './navigation/AuthStackNavigation';

import HistoryScreen from './screens/HistoryScreen';
import PromotionScreen from './screens/PromotionScreen';
import SupportScreen from './screens/SupportScreen';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MenuScreen from './screens/MenuScreen';
import ProfileScreen from './screens/ProfileScreen'
import HistoryStackScreen from './navigation/DrawerNavigation';

const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <AuthStackScreen />
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent { ...props } /> }>
        <Drawer.Screen name="Menu" component={MainTabScreen} />
        <Drawer.Screen name="History" component={HistoryScreen} />
        <Drawer.Screen name="Promotion" component={PromotionScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({

});
