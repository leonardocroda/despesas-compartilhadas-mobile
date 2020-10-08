import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import CreateExpense from './pages/CreateExpense';
import Notifications from './pages/Notifications';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Routes(props) {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="CreateExpense">
        <Drawer.Screen name="Cadastrar Despesa" component={CreateExpense} />
        <Drawer.Screen name="Cadastrar Grupo" component={Notifications} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
