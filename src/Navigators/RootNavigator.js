import {Home, Login, Register} from '../pages'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {UserContext, useContext} from '../../Context'
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {user} = useContext(UserContext)
  console.log(user)
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
      {
        user.id ? (
            <Stack.Screen name="Home" component={Home} options={headerStyle}/>
        ) : (
          <Stack.Group initialRouteName={'Login'}>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
          </Stack.Group>
        )
      }
    </Stack.Navigator>
  )
}

export default RootNavigator