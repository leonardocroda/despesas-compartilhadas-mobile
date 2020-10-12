import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateExpense from '../pages/CreateExpense';
import CreateGroup from '../pages/groups/CreateGroup';
import JoinGroup from '../pages/groups/JoinGroup';
import Groups from '../pages/groups';
import ModalComponent from '../components/Modal';

const Stack = createStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => {
        return {
          headerStyle: { backgroundColor: '#3F51B5' },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerTintColor: '#fff',
          headerLeft: () => {
            return <ModalComponent navigation={navigation} />;
          },
        };
      }}
    >
      <Stack.Screen name="Cadastrar uma Despesa" component={CreateExpense} />
      <Stack.Screen name="Grupos" component={Groups} />
      <Stack.Screen name="Entrar em um Grupo" component={JoinGroup} />
      <Stack.Screen name="Criar um Grupo" component={CreateGroup} />
    </Stack.Navigator>
  );
}
