import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
var { width } = Dimensions.get("window")

export default class CheckoutScreen extends React.Component {
  render() {
    return (
      <ScrollView >
        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 25 }]}>Choose Payment Method</Text>
        </View>
        <LinearGradient
          colors={['#FFBD90', '#FFE4D1']}
          start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}
          style={styles.item}>
            <Text style={styles.textPrice}>Add New Payment Type</Text>
            <View style={{ width: 10 }} />
            <Ionicons name="ios-add-circle" color="white" size={30}></Ionicons>
        </LinearGradient>
        <LinearGradient
          colors={['#FFBD90', '#FFE4D1']}
          start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}
          style={styles.item}>
            <Text style={styles.textPrice}>Use Existing Payment</Text>
            <View style={{ width: 10 }} />
            <Ionicons name="ios-add-circle" color="white" size={30}></Ionicons>
        </LinearGradient>
        <View style={{ height:30 }} />
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => this.onClickAddCart()}
            style={{
              backgroundColor: "#FF914D",
              alignItems: 'center',
              padding: 10,
              width: width - 40,
              borderRadius: 5
            }}>
            <Text style={{
              fontSize: 20,
              fontWeight: "bold",
              color: 'white'
            }}>
              PAYMENT CONFIRM
          </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  back: {
    left: 0,
    marginTop: 15,
    marginLeft: 15
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 20
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  cart_button: {
    marginTop: 5 ,
    backgroundColor: '#FF914D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 5,
    padding: 4,
    marginLeft: 55
  },
  textPrice: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 6,
    marginLeft: 20
  },
  item: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
});
