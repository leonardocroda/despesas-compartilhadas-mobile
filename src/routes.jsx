import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CreateExpense from './pages/CreateExpense';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Routes() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="CreateExpense"
        drawerContentOptions={{ activeTintColor: 'red' }}
      >
        <Drawer.Screen name="Cadastrar Despesa" component={CreateExpense} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
