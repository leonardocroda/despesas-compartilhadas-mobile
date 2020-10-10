import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

export default function AuthRoutes() {
  const Drawer = createDrawerNavigator();

  return (
      <Drawer.Navigator
        initialRouteName="Entrar"
        drawerContentOptions={{ activeTintColor: '#3F51B5' }}
      >
        <Drawer.Screen name="Entrar" component={SignIn} />
        <Drawer.Screen name="Criar Conta" component={SignUp} />
      </Drawer.Navigator>
  );
}
