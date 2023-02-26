//React
import React, {useState} from 'react'
//Components
import { View } from 'react-native'
import Logo from '../assets/Logo/logo.png'
import { DCButton, DCImage, DCInput, DCPage, DCText } from '../Layouts'
//Helpers
import { showToast } from '../helpers/alert'
import {UserContext, useContext} from '../../Context'

const Login = ({navigation}) => {
  const {setUser} = useContext(UserContext);
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
        showToast('success', 'Loginned successfully ✌🏻')
        navigation.navigate("Home")
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
  return (
    <DCPage>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DCImage
          src={Logo}
          width={284}
          height={72}
          style={{ marginBottom: 100 }}
        />
        <DCInput
          autoFocus={false}
          placeholder={"E-mail"}
          type={"email"}
          capitalize={false}
          value={formData.email}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, email: text }))
          }
        />
        <DCInput
          autoFocus={false}
          placeholder={"Password"}
          type={"password"}
          capitalize={false}
          marginBottom={30}
          value={formData.password}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, password: text }))
          }
        />
        <DCButton onPress={loginHandler}>
          <DCText>Login</DCText>
        </DCButton>
        <DCText color={"#fff"} textAlign={"right"} marginTop={10} onPress={() => console.log('new password')}>
          Forgot your password?
        </DCText>
        <DCText color={"#fff"} weight={'700'} textAlign={"center"} marginTop={40} onPress={() => navigation.push("Register")}>
          Create new account!
        </DCText>
      </View>
    </DCPage>
  );
}

export default Login