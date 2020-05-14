import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

var data =
[
  {
    name:'Cappucinno',
    image: require("../assets/images/cap.png"),
    price: "$12"
},
{
    name:'Latte',
    image: require("../assets/images/latte.png"),
    price: "$15"
},
{
    name:'Long Black',
    image: require("../assets/images/black.png"),
    price: "$20"
},
{
    name:'Tea',
    image: require("../assets/images/tea.png"),
    price: "$12"
},
{
    name:'Iced Latte',
    image: require("../assets/images/iced-latte.png"),
    price: "$13"
},
{
  name:'Iced Latte',
  image: require("../assets/images/iced-latte.png"),
  price: "$13"
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


  
  renderItem = ({item}) => {
    return(
      <LinearGradient 
      colors={['#FFBD90','#FFE4D1']}
      start={{x:0, y:1}} end={{x:1,y:0}}
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
          style={{flex:1, marginLeft:10, text:"black"}}
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
