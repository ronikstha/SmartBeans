import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View , TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CreditCardInput} from 'react-native-credit-card-input';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Wallet extends React.Component {

  render() {
    return (
        <View style={styles.footer}>
          <Text style={styles.text_footer}>CARD NUMBER</Text>
          <View style={styles.action}>
            <FontAwesome name="credit-card-alt" color="#05375a" size={18}/>
            <TextInput 
            placeholder="Your Card Number" 
            style={styles.textInput} 
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            />
          </View>
          <Text style={styles.text_footer, {marginTop: 35}  }>NAME ON CARD</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20}/>
            <TextInput 
            placeholder="Your Full Name" 
            style={styles.textInput} 
            autoCapitalize="none" 
            />
          </View>
          <Text style={styles.text_footer, {marginTop: 35}  }>EXPIRY DATE</Text>
          <View style={styles.action}>
            <FontAwesome name="calendar-o" color="#05375a" size={20}/>
            <TextInput 
            placeholder="Expiry Date" 
            style={styles.textInput} 
            autoCapitalize="none" 
            />
          </View>
          <Text style={styles.text_footer, {marginTop: 35}  }>CVV</Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color="#05375a" size={20}/>
            <TextInput 
            placeholder="CVV Code " 
            style={styles.textInput} 
            autoCapitalize="none" 
            secureTextEntry="true"
            />
          </View>
          
          <View style={styles.button}>
              <TouchableOpacity style={[styles.signIn, {backgroundColor: '#FF914D'}]} onPress={() => {}}>
                  <Text style={[styles.textSign, {color: '#fff'}]}>SAVE CARD DETAILS</Text>
              </TouchableOpacity>
          </View>
        </View>
        
    );
  }
}


const styles = StyleSheet.create({
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold',
      
  }
});
