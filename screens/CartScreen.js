import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";
import { AsyncStorage } from 'react-native';
var { width } = Dimensions.get("window")

//35.57

export default class CartScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataCart: [],
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('cart').then((cart) => {
      if (cart !== null) {
        // We have data!!
        const cartfood = JSON.parse(cart)
        this.setState({ dataCart: cartfood })
      }
    })
      .catch((err) => {
        alert(err)
      })
  }

  onChangeQual(i, type) {
    const dataCar = this.state.dataCart
    let cantd = dataCar[i].quantity;

    if (type) {
      cantd = cantd + 1
      dataCar[i].quantity = cantd
      this.setState({ dataCart: dataCar })
    }
    else if (type == false && cantd >= 2) {
      cantd = cantd - 1
      dataCar[i].quantity = cantd
      this.setState({ dataCart: dataCar })
    }
    else if (type == false && cantd == 1) {
      dataCar.splice(i, 1)
      this.setState({ dataCart: dataCar })
    }
  }

  onLoadTotal()
  {
      var total = 0
      const cart = this.state.dataCart

      for (var i=0; i < cart.length; i++) {
        total = total + (cart[i].price*cart[i].quantity)
      }
      return total
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        {/* <ScrollView>
          {
            this.state.dataCart.map((item,i) => {
              return (
                <View style={{ width: width - 20, margin: 10, backgroundColor: 'transparent', flexDirection: 'row', borderBottomWidth: 2, borderColor: "#cccccc", paddingBottom: 10 }}>
                  <Image resizeMode={"contain"} style={{ width: width / 3, height: width / 3 }} source={item.image} />
                  <View style={{ flex: 1, backgroundColor: 'trangraysparent', padding: 10, justifyContent: "space-between" }}>
                    <View>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>zaa</Text>

                      <Text>{JSON.stringify(item)}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ fontWeight: 'bold', color: "#FF914D", fontSize: 20 }}>{item.price}</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={()=>this.onChangeQual(i,false)}>
                          <Ionicons name="ios-remove-circle" size={30} color={"#FF914D"} />
                        </TouchableOpacity>
                        <Text style={{ paddingHorizontal: 8, fontWeight: 'bold', fontSize: 18 }}>{item.quantity}</Text>
                        <TouchableOpacity onPress={()=>this.onChangeQual(i,true)}>
                          <Ionicons name="ios-add-circle" size={30} color={"#FF914D"} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              )
            })
          }
          
        </ScrollView> */}
        <ScrollView>
                <View style={{ width: width - 20, margin: 10, backgroundColor: 'transparent', flexDirection: 'row', borderBottomWidth: 2, borderColor: "#cccccc", paddingBottom: 10 }}>
                  <Image resizeMode={"contain"} style={{ width: width / 3, height: width / 3 }} source={require("../assets/images/cap.png")} />
                  <View style={{ flex: 1, backgroundColor: 'trangraysparent', padding: 10, justifyContent: "space-between" }}>
                    <View>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Cappacinno</Text>

                      <Text>Cappacino is hot frothy milk coffee. It has alot of foam in it.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ fontWeight: 'bold', color: "#FF914D", fontSize: 20 }}>$4.5</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={()=>this.onChangeQual(i,false)}>
                          <Ionicons name="ios-remove-circle" size={30} color={"#FF914D"} />
                        </TouchableOpacity>
                        <Text style={{ paddingHorizontal: 8, fontWeight: 'bold', fontSize: 18 }}>2</Text>
                        <TouchableOpacity onPress={()=>this.onChangeQual(i,true)}>
                          <Ionicons name="ios-add-circle" size={30} color={"#FF914D"} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
        </ScrollView>
        <View style={{ height:10 }} />

        {/* <Text dyle={{fontSize:20, color:"#FF914D" }}>Total: ${this.onLoadTotal()}</Text> */}
        <Text dyle={{fontSize:20, color:"#FF914D" }}>Total: $ 9</Text>

        <View style={{ height: 10}} />

        <TouchableOpacity 
         onPress={() => this.props.navigation.navigate('Checkout')}
         style={{
          backgroundColor: "#FF914D",
          alignItems: 'center',
          padding: 10,
          width: width - 40,
          borderRadius: 5
        }}>
          <Text style={{
            fontSize: 24,
            fontWeight: "bold",
            color: 'white'
          }}>
            CHECKOUT
          </Text>
        </TouchableOpacity>
        <View style={{ height: 10 }} />
      </View>




    )

  }


}


const styles = StyleSheet.create({

});
