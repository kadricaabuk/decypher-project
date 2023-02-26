import { StyleSheet, Text } from 'react-native'

const DCText = ({children, color, size, weight, marginTop=0, marginBottom=0,marginLeft=0, marginRight=0, textAlign, width, ...props}) => {
    const styles = StyleSheet.create({
        text: {
            color: color ? color : '#384151',
            fontSize: size ? size : 14,
            fontWeight: weight ? weight : '400',
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginRight: marginRight,
            marginLeft: marginLeft,
            textAlign: textAlign ? textAlign : 'center',
            width: width ? width : 280
          },
    })
  return <Text style={styles.text} {...props}>{children}</Text>
}

export default DCText