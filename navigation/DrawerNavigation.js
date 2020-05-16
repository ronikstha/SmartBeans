import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import HistoryScreen from '../screens/HistoryScreen';

import { AuthContext } from '../components/Context';

export function DrawerContent(props) {

  const { signOut } = React.useContext(AuthContext);
   
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView { ...props}>
                <View style={styles.drawerContent}> 
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Avatar.Image source={{
                                uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                            }}
                            size={50}  />
                            <View style={{marginLeft:15, flex: 'colomn'}}>
                                <Title style={styles.title}>Ronik Shrestha</Title>
                                <Caption style={styles.caption}>@ron_stha</Caption> 
                            </View>
                        </View>

                        <Drawer.Section style={styles.drawerSection} >
                            <DrawerItem 
                               icon={({color,size}) =>(
                                   <Icon name="home-outline" color={color} size={size} />
                               )}
                               label="Home"
                               onPress={() => {props.navigation.navigate('Home')}}
                            />
                            <DrawerItem 
                               icon={({color,size}) =>(
                                   <Icon name="account-outline" color={color} size={size} />
                               )}
                               label="Profile"
                               onPress={() => {props.navigation.navigate('Profile')}}
                            />
                            <DrawerItem 
                               icon={({color,size}) =>(
                                   <Icon name="account-check-outline" color={color} size={size} />
                               )}
                               label="Order History"
                               onPress={() => {props.navigation.navigate('History')}}
                            />
                            <DrawerItem 
                               icon={({color,size}) =>(
                                   <Icon name="money-outline" color={color} size={size} />
                               )}
                               label="Promotions"
                               onPress={() => {props.navigation.navigate('Promotion')}}
                            />
                            <DrawerItem 
                               icon={({color,size}) =>(
                                   <Icon name="settings-outline" color={color} size={size} />
                               )}
                               label="Support"
                               onPress={() => {props.navigation.navigate('Support')}}
                            />
                        </Drawer.Section>
                    </View>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem icon={({color,size}) =>(
                    <Icon name="exit-to-app" color={color} size={size} />
                )}
                label="Sign Out"
                onPress={() => {signOut()}} />               
            </Drawer.Section>
        </View>
    )
}



const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });