import React, { useEffect } from 'react'
import { Text } from 'react-native'

const Home = ({ navigation }) => {
  const __token = ""
  useEffect(() => {
    if(!__token) navigation.navigate("Login")
  }, [__token]);
  return (
    <Text>Home</Text>
  )
}

export default Home