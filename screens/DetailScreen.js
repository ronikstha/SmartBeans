import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground, Dimensions, StatusBar } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';


 
export default class DetailScreen extends React.Component  {

  constructor(props) {
    super(props)
  }
  
  onClickAddCart() {
    alert("Successfully added")
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <LinearGradient 
      colors={['#FFBD90','#FFE4D1']}
      start={{x:1, y:0}} end={{x:0,y:1}}
      style={styles.header}
      >
        <View style={styles.image_container}>
             <Image 
                source={require("../assets/images/cap.png")}
                 style={styles.image}
              />  
        </View>
        <View style={styles.back}>
          <Ionicons 
          name="ios-arrow-round-back"
          color="white"
          size={35}
          onPress={() =>this.props.navigation.goBack()}
          />
        </View>
        </LinearGradient>
        <View style={styles.footer}>
          <View style={styles.status}>
            <Text style={{color:'#FF914D'}}>Available</Text>
          </View>
            <Text style={styles.textPrice}>$3.5</Text>
           <Text style={styles.textName}>Cappacino</Text>
          <Text style={styles.textDetail}>Cappacino is hot frothy milk coffee. It has alot of foam in it. </Text>

          {/* <Text style={styles.textPrice}>{this.props.navigation.state.params.price}</Text>
          <Text numberOfLines={2} style={styles.textName}>{this.props.navigation.state.params.name.toUpperCase()}</Text> */}

          <TouchableOpacity 
          style={{backgroundColor:"#FF914D", justifyContent:'center', alignItems:'center', marginTop:40, paddingVertical:10, borderRadius:50}}
          onPress={()=>this.onClickAddCart()}
          >
            <Text style={styles.textOrder}>Add to Cart</Text>
            </TouchableOpacity>
        </View>


      </View>
    );
  }
}

const height = Dimensions.get("screen").height;
const height_image = height * 0.5 * 0.5;


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white'
  },
   header: {
    flex:1,
    backgroundColor:"#FF914D",
    alignItems: "center"
  },
  footer: {
    flex:1.3,
    paddingHorizontal:40
  },
  image_container: {
    width: height_image,
    height: height_image,
    marginTop: height_image/8,
    marginRight:50
  },
  image: {
    width: 225,
    height: 225,
    borderWidth:5,
    borderColor:'white',
    borderRadius: height_image/3,
    
  },
  back:{
    position:'absolute',
    left:0,
    marginTop:30,
    marginLeft:15
  },
  status: {
    width:100,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderRadius:50,
    paddingVertical:3,
    borderColor:'#FF914D',
    marginTop:20
  },
  textPrice: {
    color:'#FF914D',
    fontWeight:'bold',
    fontSize:30,
    marginTop:20
  },
  textName: {
    color: '#3e3c3e',
    fontWeight:'bold',
    fontSize:35,
    marginTop:5
  },
  textDetail: {
    color:'gray',
    marginTop:10
  },
  button: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
    paddingVertical:10,
    borderRadius:50
  },
  textOrder: {
    color:'white',
    fontWeight:'bold',
    fontSize:20
  }
});
