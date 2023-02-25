import { StyleSheet, Text } from 'react-native'

const DCText = ({children, color, size, weight, margin}) => {
    const styles = StyleSheet.create({
        text: {
            color: color ? color : '#384151',
            fontSize: size ? size : 14,
            fontWeight: weight ? weight : '400',
            margin: margin ? margin : 'auto',
          },
    })
  return <Text style={styles.text}>{children}</Text>
}

export default DCText