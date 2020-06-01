import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import DetailStackScreen from '../App';


const HomeStack = createStackNavigator();
const CartStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#FF914D' }}
    >
      <Tab.Screen
        name="Menu"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={29} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartStackScreen}
        options={{
          tabBarLabel: 'Customer Cart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={29} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;


const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#FF914D',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <HomeStack.Screen name="Home" component={MenuScreen} options={{ 
        title: 'Menu',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#FF914D" onPress={() => navigation.openDrawer()}></Icon.Button>
        ) 
        }} />
    </HomeStack.Navigator>
  );
  

  
  const CartStackScreen = ({ navigation }) => (
    <CartStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#FF914D',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <CartStack.Screen name="Cart" component={CartScreen} options={{ title: 'Order Cart',
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="#FF914D" onPress={() => navigation.openDrawer()}></Icon.Button>
    )
    }} />
    </CartStack.Navigator>
  );