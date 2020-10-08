import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import CreateExpense from './pages/CreateExpense';
// import Notifications from './pages/Notifications';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import TopBar from './components/TopBar';

export default function Routes() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="CreateExpense"
        drawerContentOptions={{ activeTintColor: 'red' }}
      >
        <Drawer.Screen name="Cadastrar Despesa" component={CreateExpense} />
        <Drawer.Screen name="Cadastrar Grupo" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
