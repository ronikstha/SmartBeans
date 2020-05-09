import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from './navigation/DrawerNavigation'
import MainTabScreen from './navigation/MainTabNavigation';
import AuthStackScreen from './navigation/AuthStackNavigation';

import { AuthContext } from './components/Context';
import { AsyncStorage } from 'react-native';

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

// const [isLoading, setIsLoading] = React.useState(true);
// const [userToken, setUserToken] = React.useState(null);

const initialLoginState = {
  isLoading: true,
  userName: null,
  userToken: null,
};

const loginReducer = (prevState, action) => {
    switch( action.type ){
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };   
    }
}

const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

const authContext = React.useMemo(() => ({
  signIn: async(foundUser) => {
    // setUserToken('fgkj');
    // setIsLoading(false);
    const userToken = String(foundUser[0].userToken);
    const userName = foundUser[0].username;
    
    try {
      await AsyncStorage.setItem('userToken', userToken);
    } catch(e) {
      console.log(e);
    }
    // console.log('user token: ', userToken);
    dispatch({ type: 'LOGIN', id: userName, token: userToken });
  },
  signOut: async() => {
    // setUserToken(null);
    // setIsLoading(false);
    try {
      await AsyncStorage.removeItem('userToken');
    } catch(e) {
      console.log(e);
    }
    dispatch({ type: 'LOGOUT' });
  },
  signUp: () => {
    // setUserToken('fgkj');
    // setIsLoading(false);
  },
}), []);

useEffect(() => {
  setTimeout(async() => {
    // setIsLoading(false);
    let userToken;
    userToken = null;
    try {
      userToken = await AsyncStorage.getItem('userToken');
    } catch(e) {
      console.log(e);
    }
    // console.log('user token: ', userToken);
    dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
  }, 1000);
}, []);



if( loginState.isLoading ) {
  return(
    <View style={{flex:1, justifyContent:'center'}}>
      <ActivityIndicator size='large' />
    </View>
  )
}

  return (
    <AuthContext.Provider  value={authContext}>
    <NavigationContainer>
      { loginState.userToken !== null ? (
              <Drawer.Navigator drawerContent={props => <DrawerContent { ...props } /> }>
              <Drawer.Screen name="Menu" component={MainTabScreen} />
              <Drawer.Screen name="History" component={HistoryScreen} />
              <Drawer.Screen name="Promotion" component={PromotionScreen} />
              <Drawer.Screen name="Support" component={SupportScreen} />
            </Drawer.Navigator> 
      )
        :   <AuthStackScreen />
      }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;


const styles = StyleSheet.create({

});
