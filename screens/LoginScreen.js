import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({navigation}) => {

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
});

const textInputChange = (val) => {
  if( val.trim().length >= 4 ) {
      setData({
          ...data,
          username: val,
          check_textInputChange: true,
          isValidUser: true
      });
  } else {
      setData({
          ...data,
          username: val,
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

    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/cover.png')} style={styles.logo} />
        <View style={styles.inputView} >
          <TextInput 
            style={styles.inputText}
            placeholder="Email..."
            autoCapitalize="none"
            placeholderTextColor="#003f5c"
            onChangeText={text => textInputChange(val)} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry = {data.secureTextEntry ? true : false }
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={(val) => handlePasswordChange(val)} />
        </View>

        <TouchableOpacity style={styles.loginBtn}  >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.register}>Don't have a Account yet? Click Here...</Text>
        </TouchableOpacity>
      </View>
    );
  }

  export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF914D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 0
  },
  inputView: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 55,
    color: "black"
  },
  forgot: {
    color: "white",
    fontSize: 15
  },
  register:{
    marginTop: 20,
    color: "white",
    fontSize: 17
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#d1001c",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white",
    fontSize: 20
  }
});
