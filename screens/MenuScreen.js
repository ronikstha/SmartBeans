import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  TouchableOpacityBase
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AsyncStorage } from 'react-native';

var data =
[
  {
    name:'Cappucinno',
    image: require("../assets/images/cap.png"),
    price: "$4.5"
},
{
    name:'Latte',
    image: require("../assets/images/latte.png"),
    price: "$4.5"
},
{
    name:'Long Black',
    image: require("../assets/images/black.png"),
    price: "$3.5"
},
{
    name:'Tea',
    image: require("../assets/images/tea.png"),
    price: "$3.5"
},
{
    name:'Iced Latte',
    image: require("../assets/images/iced-latte.png"),
    price: "$5.5"
},
{
  name:'Iced Latte',
  image: require("../assets/images/iced-latte.png"),
  price: "$5.5"
},
]

export default class MenuScreen extends React.Component {

  constructor(props){
    super(props);
    this.state={
      data: data,
      data_temp : data,
      search : ''
    }
  }

  // food: data,
  //    quantity:  1,
  //    price: data.price

 onClickAddCart(data){

  const itemcart = {
    food : data,
    quantity:1,
    price: data.price
  }
    
    AsyncStorage.getItem("cart").then((datacart)=>{
       
      if (datacart!== null) {
        const cart = JSON.parse(datacart)
        cart.push(itemcart)
        AsyncStorage.setItem("cart", JSON.stringify(cart))
      }
      else{
        const cart = []
        cart.push(itemcart)
        AsyncStorage.setItem("cart", JSON.stringify(cart))
      } 
      alert("Successfully added")
    })
    .catch((error)=>{
      alert(error)
    })
 }


  renderItem = ({item}) => {
    return(
      <LinearGradient 
      colors={['#FFBD90','#FFE4D1']}
      start={{x:1, y:1}} end={{x:0,y:0}}
      style={styles.item}
      >
        <View style={styles.image_container}>
           <Image 
           source={item.image}
           style={styles.image}
           />
        </View>
        <View style={styles.content}>
           <Text style={styles.name}>
             {item.name}
           </Text>
           <View style={styles.price_container}>
             <View style={styles.price}>
               <Text style={styles.textPrice}>{item.price}</Text>
             </View>
           </View>
           <TouchableOpacity style={styles.cart_button}
             onPress={()=>this.onClickAddCart(item)}
           >
              <Text style={styles.textPrice}>Add to Cart</Text>
              <View style={{width:10}} />
              <Ionicons name="ios-add-circle" color="white" size={20}></Ionicons>
           </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Detail', { image: item.image,
            price: item.price,
            name: item.name})}>
            <AntDesign name="arrowright" color="red" size={25}/>
        </TouchableOpacity>
      </LinearGradient>
    )
  }
  
 
  _search(text){
     let data = [];
     this.state.data_temp.map(function(value){
       if(value.name.indexOf(text) > -1) {
         data.push(value);
       }
     });
     this.setState({
       data:data,
       search:text
     })
  } 


  render() {
    return (
      <View style={styles.container}>  
        <View style={styles.section}>
          <TextInput
          placeholder="Search.."
          style={{flex:1, marginLeft:10, color:"black"}}
          value={this.state.search}
          onChangeText={(text) => this._search(text)}
          />
          <TouchableOpacity>
          <Ionicons name="ios-search" color="gray" size={20}/>
          </TouchableOpacity>
        </View>
        <ScrollView>
        <View style={styles.flatlist}>
           <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index)=>index.toString()}
            showsVerticalScrollIndicator={false}
            />
        </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    paddingBottom:5
  },
  flatList: {
    flex:1,
    marginTop:10
  },
  cart_button: {
              marginTop: 10,
              backgroundColor:'#FF914D',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:"center",
              borderRadius:5,
              padding: 4
  },
  item: {
    flex:1,
    paddingVertical:10,
    paddingHorizontal:10,
    flexDirection:'row',
    borderRadius:10,
    marginLeft: 15,
    marginRight:15,
    marginTop:15
  },
  image_container: {
    width: 90,
    height: 90
  },
  image: {
    width:'100%',
    height:'100%',
    borderWidth:5,
    borderColor:'white',
    borderRadius:10
  },
  content: {
    flex:1,
    paddingHorizontal:10
  },
  name: {
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  rating: {
    marginTop:5,
    flexDirection:'row'
  },
  button: {
    width:50,
    height:50,
    backgroundColor:'white',
    borderRadius:35,
    justifyContent:'center',
    alignItems:'center'
  },
  price_container: {
    flexDirection:'row',
    marginTop:10
  },
  price: {
    backgroundColor:'white',
    paddingVertical:5,
    paddingHorizontal:15,
    borderRadius:50 
   },
  textPrice: {
    color:'black',
    fontWeight:'bold',
    fontSize: 15
  },
  section: {
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:100,
    backgroundColor:'#f2f2f2',
    marginTop:10,
    marginLeft:20,
    marginRight:20,
  }
});
