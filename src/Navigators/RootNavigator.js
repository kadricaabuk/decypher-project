import {Home, Login, Register} from '../pages'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const headerStyle = {
    headerStyle: {
      backgroundColor: '#384151',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'normal',
    },
  }
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={headerStyle}/>
    </Stack.Navigator>
  )
}

export default RootNavigator