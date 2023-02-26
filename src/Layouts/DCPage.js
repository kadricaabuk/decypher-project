import { StyleSheet, SafeAreaView } from "react-native"

const DCPage = ({children}) => {
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#384151'
      }
  })
  return (
    <SafeAreaView style={styles.container}>
        {children}
    </SafeAreaView>
  )
}

export default DCPage