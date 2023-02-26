//React
import React, {useEffect, useState} from 'react'
//Components
import { View } from 'react-native'
import Logo from '../assets/Logo/logo.png'
import { DCButton, DCImage, DCInput, DCPage, DCText } from '../Layouts'
//Helpers
import { showToast } from '../helpers/alert'
import {UserContext, useContext} from '../../Context'

const Login = ({navigation}) => {
  const {user, setUser} = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const loginHandler = () => {
    fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      let userFromApi = data.filter(user => user.email === formData.email && user.password === formData.password)[0]
      if(userFromApi){
        setUser(userFromApi)
      }else{
        setUser({})
        showToast(
          'error',
          'The email or password is incorrect!',
          'Please try again.'
          )
      }
    });
  }
  useEffect(() => {
    if(user.id){
      navigation.navigate("Home")
    }
  }, [user]);
  return (
    <DCPage>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DCImage src={Logo} width={284} height={72} style={{ marginBottom: 100 }}/>
        <DCInput
          autoFocus={false}
          placeholder={"E-mail"}
          type={"email"}
          capitalize={false}
          value={formData.email}
          onChangeText={text => setFormData(prev => ({...prev, email: text}))}
        />
        <DCInput
          autoFocus={false}
          placeholder={"Password"}
          type={"password"}
          capitalize={false}
          marginBottom={30}
          value={formData.password}
          onChangeText={text => setFormData(prev => ({...prev, password: text}))}
        />
        <DCButton onPress={loginHandler}>
          <DCText>Login</DCText>
        </DCButton>
      </View>
    </DCPage>
  );
}

// placeholder={placeholder}
//         value={value}
//         onChangeText={onChangeText}
//         autoFocus={autoFocus}
//         keyboardType={type === 'email' ? 'email-address' : type}
//         secureTextEntry={type === 'password' ? true : false}
//         autoCapitalize={capitalize ? 'words' : 

export default Login