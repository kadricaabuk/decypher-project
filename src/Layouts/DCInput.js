import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const DCInput = ({type, autoFocus, onChangeText, placeholder, value, capitalize=false, marginBottom}) => {
    const styles = StyleSheet.create({
        input: {
            height: 40,
            width: 280,
            padding: 8,
            color: "#fff",
            marginBottom: marginBottom ? marginBottom : null
          },
        capitalize: {
            textTransform: 'capitalize',
        },
      })
  return (
    <TextInput
        style={[styles.input, capitalize && styles.capitalize]}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor={"#AAAAAA"}
        value={value}
        onChangeText={onChangeText}
        autoFocus={autoFocus}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        secureTextEntry={type === 'password' ? true : false}
        autoCapitalize={capitalize ? 'words' : 'none'}
      />

  )
}

export default DCInput