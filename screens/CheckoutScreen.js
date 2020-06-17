import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";
var { width } = Dimensions.get("window")

export default class CheckoutScreen extends React.Component {



  render() {
    return (
      <ScrollView >
         <View style={styles.back}>
          <Ionicons 
          name="ios-arrow-round-back"
          color="black"
          size={35}
          onPress={() =>this.props.navigation.goBack()}
          />
         </View>
         <View></View>
          <View style={{alignItems: 'center'}}>
          <TouchableOpacity 
          onPress={()=>this.onClickAddCart()}
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
  back:{
    left:0,
    marginTop:15,
    marginLeft:15
  },
});
