import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MenuScreen from '../screens/MenuScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const CartStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#FF914D' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Cafe Menu',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={29} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={29} />
          ),
        }}
      /> */}
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
        title: 'Cafe Menu',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#FF914D" onPress={() => navigation.openDrawer()}></Icon.Button>
        ) 
        }} />
    </HomeStack.Navigator>
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
      <ProfileStack.Screen name="Home" component={ProfileScreen} options={{ title: 'Cafe User Profile',
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="#FF914D" onPress={() => navigation.openDrawer()}></Icon.Button>
    )
    }} />
    </ProfileStack.Navigator>
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
      <CartStack.Screen name="Cart" component={CartScreen} options={{ title: 'Cafe User Cart',
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="#FF914D" onPress={() => navigation.openDrawer()}></Icon.Button>
    )
    }} />
    </CartStack.Navigator>
  );