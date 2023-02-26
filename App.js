import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/Navigators/RootNavigator';
import Toast from 'react-native-toast-message';
import {UserContext} from './Context';
import { useState } from 'react';
export default function App() {
  const [user, setUser] = useState({})
  const initialContextValue = { 
    user,
    setUser
  };

  return (
    <UserContext.Provider value={initialContextValue}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <Toast />
    </UserContext.Provider>
  );
}
