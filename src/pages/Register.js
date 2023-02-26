//React
import {useEffect, useState} from 'react'
//Components
import { View } from 'react-native'
import Logo from '../assets/Logo/logo.png'
import { DCPage, DCText, DCImage, DCInput, DCButton } from '../Layouts'
//Helpers
import { showToast } from '../helpers/alert'
import {UserContext, useContext} from '../../Context'

const Register = ({navigation}) => {
  
  const {setUser} = useContext(UserContext);

  const [formData, setFormData] = useState({
    id: Date.now(),
    email: "",
    password: "",
    name: ""
  })

  const checkUserExist = async (user) => {
    const users = await getUsers()
    return Boolean(users.filter(u => u.email === user.email)[0])
  }
  
  const getUsers = async () => {
    const response = await fetch("http://localhost:3000/users")
    const data = await response.json()
    return data
  }

  const registerHandler = async () => {
    const isHaveUser = await checkUserExist(formData)
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }
    if(!isHaveUser){
      const res = await fetch("http://localhost:3000/users", options)
      const userFromApi = await res.json()
      if(userFromApi.id){
        setUser(userFromApi)
        showToast('success', 'User registered, successfully ✌🏻')
        navigation.navigate("Home")
      }
    }else{
      showToast('error', 'user already registered', 'please try again!')
    }
    
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
          placeholder={"Name"}
          type={"text"}
          capitalize={true}
          value={formData.name}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, name: text }))
          }
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
        <DCButton onPress={registerHandler}>
          <DCText>Create Account</DCText>
        </DCButton>
        <DCText color={"#fff"} weight={'700'} textAlign={"center"} marginTop={40} onPress={() => navigation.navigate("Login")}>
          Already have an account?
        </DCText>
      </View>
    </DCPage>
  )
}

export default Register