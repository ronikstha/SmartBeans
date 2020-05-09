import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions, TouchableOpacityComponent } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { AuthContext } from '../components/Context';
import Users from '../components/users';

const LoginScreen = ({ navigation }) => {

  const [data, setData] = React.useState({
     userName:'',
     password:'',
     check_textInputChange:false,
     secureTextEntry: true,
     isValidUser: true,
     isValidPassword: true,
  });
  
  const { signIn } = React.useContext(AuthContext);
   
  const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            userName: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            userName: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
}

const handlePasswordChange = (val) => {
    if( val.trim().length >= 8 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
    }
}

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}

const handleValidUser = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            isValidUser: false
        });
    }
}

const loginHandle = (userName, password) => {

  const foundUser = Users.filter( item => {
      return userName == item.userName && password == item.password;
  } );

  if ( data.userName.length == 0 || data.password.length == 0 ) {
      Alert.alert('Wrong Input!', 'Email or password field cannot be empty.', [
          {text: 'Okay'}
      ]);
      return;
  }

  if ( foundUser.length == 0 ) {
      Alert.alert('Invalid User!', 'Email or password is incorrect.', [
          {text: 'Okay'}
      ]);
      return;
  }
  signIn(foundUser);
}



  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text_footer}>Username</Text>
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
          { data.isValidUser ? null :          
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            }

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
          { data.isValidPassword ? null : 
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            }
          <View style={styles.button}>
              <TouchableOpacity style={[styles.signIn, {backgroundColor: '#FF914D'}]} onPress={() => {loginHandle( data.username, data.password )}}>
                  <Text style={[styles.textSign, {color: '#fff'}]}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.signIn, {marginTop:15, borderColor:'#FF914D', borderWidth:2}]} onPress={() => navigation.navigate('RegisterScreen')}>
                  <Text style={[styles.textSign, {color:'#FF914D'}]}>Register Now!</Text>
              </TouchableOpacity>
          </View>
        </View>
        
      </View>
  );
}

export default LoginScreen;

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
