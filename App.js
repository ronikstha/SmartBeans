import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, Menu } from 'react-native-paper';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from './navigation/DrawerNavigation'
import MainTabScreen from './navigation/MainTabNavigation';
import AuthStackScreen from './navigation/AuthStackNavigation';

import { AuthContext } from './components/Context';
import { AsyncStorage } from 'react-native';

import Wallet from './screens/Wallet';
import SupportScreen from './screens/SupportScreen';
import DetailScreen from './screens/DetailScreen'
import ProfileScreen from './screens/ProfileScreen';
import MenuScreen from './screens/MenuScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import CheckoutScreen from './screens/CheckoutScreen';


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
              <Drawer.Screen name="Home" component={MainTabScreen} />
              <Drawer.Screen name="Profile" component={ProfileStackScreen} />
              <Drawer.Screen name="Wallet" component={WalletStackScreen} />
              <Drawer.Screen name="Support" component={SupportStackScreen} />
              <Drawer.Screen name="Detail" component={DetailStackScreen} />
              <Drawer.Screen name="Checkout" component={CheckoutStackScreen}/> 
            </Drawer.Navigator> 
      )
        :   <AuthStackScreen />
      }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}


export default App;


// To create the header for all pages
const ProfileStack = createStackNavigator();
const WalletStack = createStackNavigator();
const SupportStack = createStackNavigator();
const DetailStack = createStackNavigator();
const CheckoutStack = createStackNavigator();

const CheckoutStackScreen = ({ navigation }) => (
  <CheckoutStack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#FF914D',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Checkout',
  headerLeft: () => (
    <Icon.Button name="ios-menu" size={25} backgroundColor="#FF914D" onPress={() => navigation.openDrawer()}></Icon.Button>
  )
  }} />
  </CheckoutStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#FF914D',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile',
  headerLeft: () => (
    <Icon.Button name="ios-menu" size={25} backgroundColor="#FF914D" onPress={() => navigation.openDrawer()}></Icon.Button>
  )
  }} />
  </ProfileStack.Navigator>
);

const WalletStackScreen = ({ navigation }) => (
  <WalletStack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#FF914D',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <WalletStack.Screen name="Wallet" component={Wallet} options={{ title: 'Wallet',
  headerLeft: () => (
    <Icon.Button name="ios-menu" size={25} backgroundColor="#FF914D" onPress={() => navigation.openDrawer()}></Icon.Button>
  )
  }} />
  </WalletStack.Navigator>
);

const SupportStackScreen = ({ navigation }) => (
  <SupportStack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#FF914D',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <SupportStack.Screen name="Support" component={SupportScreen} options={{ title: 'Support',
  headerLeft: () => (
    <Icon.Button name="ios-menu" size={25} backgroundColor="#FF914D" onPress={() => navigation.openDrawer()}></Icon.Button>
  )
  }} />
  </SupportStack.Navigator>
);

const DetailStackScreen = ({ navigation }) => (
  <DetailStack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#FF914D',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DetailStack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail View',
  headerLeft: () => (
    <Icon.Button name="ios-menu" size={25} backgroundColor="#FF914D" onPress={() => navigation.openDrawer()}></Icon.Button>
  )
  }} />
  <DetailStack.Screen name="Menu" component={MenuScreen} options={{ title: 'Detail Menu View',
  headerLeft: () => (
    <Icon.Button name="ios-menu" size={25} backgroundColor="#FF914D" onPress={() => navigation.openDrawer()}></Icon.Button>
  )
  }} />
  </DetailStack.Navigator>
);


const styles = StyleSheet.create({

});
