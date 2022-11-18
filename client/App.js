import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './pages/Cadastro';
import Listagem from './pages/Listagem';
import Login from './pages/Login';
import Signup from './pages/Signup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Signup" component={Signup} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }} />
        <Stack.Screen
          name="Listagem"
          component={Listagem}
          options={{ title: 'Listagem' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
