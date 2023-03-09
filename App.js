import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/Navigators/RootNavigator';
import Toast from 'react-native-toast-message';
import {UserContext} from './Context';
import { useEffect, useState } from 'react';
import {DCSideMenu} from './src/components';
import {init} from './src/helpers/initFunctions'
export default function App() {
  const [user, setUser] = useState({})
  const initialContextValue = { 
    user,
    setUser
  };

  // useEffect(() => {
  //   init.initializeSentry()
  // }, [])

  return (
    <UserContext.Provider value={initialContextValue}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <Toast />
      {/* <DCSideMenu /> */}
    </UserContext.Provider>
  );
}
