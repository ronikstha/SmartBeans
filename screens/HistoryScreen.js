import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class HistoryScreen extends React.Component {

  render() {
    return (
      <ScrollView >
          <View><Text> This will be our Order History </Text></View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
 
});


