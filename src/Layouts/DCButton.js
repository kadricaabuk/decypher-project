import { StyleSheet, TouchableOpacity } from 'react-native';

const DCButton = ({children, onPress}) => {
    const styles = StyleSheet.create({
        button: {
          backgroundColor: '#fff',
          height: 40,
          width: 280,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        },
      });
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        {children}
    </TouchableOpacity>
  )
}

export default DCButton