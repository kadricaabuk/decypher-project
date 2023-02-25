import React, {useEffect, useState} from 'react'
import { DCButton, DCImage, DCInput, DCPage, DCText } from '../Layouts'
import Logo from '../assets/Logo/logo.png'
import { View } from 'react-native'
import { collection, getDocs } from "firebase/firestore"; 
import firebase from "firebase/app"; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const loginHandler = async () => {
    const db = getFirestore(firebase.initializeApp({
      apiKey: "AIzaSyBLdohLjCQXMoYwq-STO2BdR6EVcSa2TTI",
      authDomain: "decypher-project.firebaseapp.com",
      projectId: "decypher-project",
      storageBucket: "decypher-project.appspot.com",
      messagingSenderId: "577271821369",
      appId: "1:577271821369:web:1a1d7a9fd42ff086a649e8",
      measurementId: "G-G502EJ7L2N"
    }));
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }
  useEffect(() => {
    console.log(formData)
  }, [formData])

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