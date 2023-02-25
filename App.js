import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/Navigators/RootNavigator';
import { initializeFirebase } from './firebase';

export default function App() {
  initializeFirebase()
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
