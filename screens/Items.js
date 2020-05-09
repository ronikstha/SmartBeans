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
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Items extends React.Component {

  constructor(props){
    super(props);
       this.state={
         data:[
          {
            name:'Cappucino',
            image: require("../assets/images/cap.png"),
            rating: 3,
            price: "$4.5"
        },
        {
            name:'Latte',
            image: require("../assets/images/latte.png"),
            rating: 5,
            price: "$4.5"
        },
        {
            name:'Long Black',
            image: require("../assets/images/black.png"),
            rating: 4,
            price: "$4.0"
        },
        {
            name:'Tea',
            image: require("../assets/images/tea.png"),
            rating: 2,
            price: "$3.5"
        },
        {
            name:'Cold Coffee',
            image: require("../assets/images/iced-latte.png"),
            rating: 5,
            price: "$5.5"
        },
         ]
       }
    }
  


    renderItem = ({item}) => {
        return(
            <LinearGradient 
            colors={['#009245', '#8cc631']}
            start={{x:0, y:1}} end={{x:1, y:0}}
            style={styles.item}
            >
              <View style={styles.image_container}>
                  <Image 
                    source={item.image}
                    style={styles.image}
                  />
              </View>
              <View style={styles.content}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={styles.rating}>
                    {this._rating(item.rating)}
                  </View>
                  <View style={styles.price_container}>
                      <View style={styles.price}>
                          <Text style={styles.textPrice}>{item.price}</Text>
                      </View>
                  </View>
              </View>
              <TouchableOpacity 
              onPress={}
              style={styles.button}>
                  <AntDesign 
                    name="arrowright"
                    color="green"
                    size={15}
                  />
              </TouchableOpacity>
    
            </LinearGradient>
        )
      }

  render() {
    return (
        <View style={styles.container}>
        <View style={styles.flatList}>
            <FlatList 
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item, index)=>index.toString()}
              ItemSeparatorComponent={this.ItemSeparatorComponent}
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
        borderRadius:10
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
        justifyContent:'center',
        paddingHorizontal:10
      },
      name: {
        color:'white',
        fontWeight:'bold',
        fontSize:18
      },
      rating: {
        marginTop:5,
        flexDirection:'row'
      },
      button: {
        width:30,
        height:30,
        backgroundColor:'white',
        borderRadius:15,
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
        color:'green',
        fontWeight:'bold'
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
