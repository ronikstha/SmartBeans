import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions, TouchableOpacityComponent } from 'react-native';
import { AuthContext } from '../components/Context';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const RegisterScreen = ({ navigation }) => {

  const [data, setData] = React.useState({
     email:'',
     password:'',
     confirm_password: '',
     check_textInputChange:false,
     secureTextEntry: true,
     confirm_secureTextEntry: true,

  });



  const textInputChange = (val) => {
    if( val.length !== 0 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false
        });
    }
}

const handlePasswordChange = (val) => {
    setData({
        ...data,
        password: val
    });
}

const handleConfirmPasswordChange = (val) => {
    setData({
        ...data,
        confirm_password: val
    });
}

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}

const updateConfirmSecureTextEntry = () => {
    setData({
        ...data,
        confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
}

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text_footer}>Your Username</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20}/>
            <TextInput 
            placeholder="Your Username" 
            style={styles.textInput} 
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ?
            <FontAwesome name="check-circle" color="green" size={20}/>
            : null}
          </View>
          <Text style={styles.text_footer, {marginTop: 35}  }>Password</Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color="#05375a" size={20}/>
            <TextInput 
            placeholder="Your Password" 
            style={styles.textInput} 
            autoCapitalize="none" 
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ?  
            <FontAwesome name="eye-slash" color="grey" size={20}/>
            :
            <FontAwesome name="eye-slash" color="green" size={20}/>
              }
            </TouchableOpacity>
          </View>
          <Text style={styles.text_footer, {marginTop: 35}  }>Confirm Password</Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color="#05375a" size={20}/>
            <TextInput 
            placeholder="Your Password" 
            style={styles.textInput} 
            autoCapitalize="none" 
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ?  
            <FontAwesome name="eye-slash" color="grey" size={20}/>
            :
            <FontAwesome name="eye-slash" color="green" size={20}/>
              }
            </TouchableOpacity>
          </View>
          
          <View style={styles.button}>
              <TouchableOpacity style={[styles.signIn, {backgroundColor: '#FF914D'}]} onPress={() => {}}>
                  <Text style={[styles.textSign, {color: '#fff'}]}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.signIn, {marginTop:15, borderColor:'#FF914D', borderWidth:2}]} onPress={() => navigation.navigate('LoginScreen')}>
                  <Text style={[styles.textSign, {color:'#FF914D'}]}>Sign In</Text>
              </TouchableOpacity>
          </View>
        </View>
        
      </View>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FF914D'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
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
