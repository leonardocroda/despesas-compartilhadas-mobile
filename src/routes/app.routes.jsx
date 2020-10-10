import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CreateExpense from '../pages/CreateExpense';
import SignUp from '../pages/SignUp';
import CreateGroup from '../pages/CreateGroup';
import SignIn from '../pages/SignIn';

export default function Routes() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="SignIn"
        drawerContentOptions={{ activeTintColor: '#3F51B5' }}
      >
        <Drawer.Screen name="Cadastrar Despesa" component={CreateExpense} />
        <Drawer.Screen name="Criar Grupo" component={CreateGroup} />
        <Drawer.Screen name="Criar Conta" component={SignUp} />
        <Drawer.Screen name="Entrar" component={SignIn} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
