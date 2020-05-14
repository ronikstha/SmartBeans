import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";

export default class MenuScreen extends React.Component {

  constructor(props){
    super(props);
    this.state={
      data:[
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
        <TouchableOpacity style={styles.button}>
            <AntDesign name="arrowright" color="red" size={25}/>
        </TouchableOpacity>

        {/* <TouchableOpacity 
          onPress={()=>this.props.props.navigation.navigate("DetailScreen",{
            image: item.image,
            price: item.price,
            name: item.name
          })}
          style={styles.button}>
              <AntDesign 
                name="arrowright"
                color="green"
                size={15}
              />
          </TouchableOpacity> */}

      </LinearGradient>
    )
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flatlist}>
           <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index)=>index.toString()}
            showsVerticalScrollIndicator={false}
            />
        </View>
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
    marginTop:10
  }
});
