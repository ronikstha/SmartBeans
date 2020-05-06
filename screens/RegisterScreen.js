import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const RegisterScreen = ({navigation}) => {
   
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
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
        <Image source={require('../assets/images/cover.png')} style={styles.logo}/> 
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Full Name" 
            placeholderTextColor="#003f5c"
            // onChangeText={(val) => textInputChange(val)}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={(val) => textInputChange(val)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={(val) => handlePasswordChange(val)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            autoCapitalize="none"
            style={styles.inputText}
            placeholder="Retype Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={(val) => handleConfirmPasswordChange(val)}/>
        </View>
    
        <TouchableOpacity style={styles.loginBtn} onPress={() => {}}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.register}>Already a Member? Let's go Login..</Text>
        </TouchableOpacity>
        
      </View>
    );
  }

  export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF914D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginTop:0
  },
  inputView:{
    width:"80%",
    backgroundColor:"#FFFFFF",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:55,
    color:"black"
  },

  loginBtn:{
    width:"80%",
    backgroundColor:"#d1001c",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:25,
    marginBottom:10
  },
  register:{
    marginTop: 20,
    color: "white",
    fontSize: 17
  },
  loginText:{
    color:"white",
    fontSize:20
  }
});