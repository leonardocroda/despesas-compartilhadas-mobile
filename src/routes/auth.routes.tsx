import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

export default function AuthRoutes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#3F51B5' },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'white',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="Entrar" component={SignIn} />
      <Stack.Screen name="Criar Conta" component={SignUp} />
    </Stack.Navigator>
  );
}
