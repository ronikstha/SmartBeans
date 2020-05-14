import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class DetailScreen extends React.Component {

  render() {
    return (
      <ScrollView >
          <View><Text> This will be our Cart </Text></View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
 
});
