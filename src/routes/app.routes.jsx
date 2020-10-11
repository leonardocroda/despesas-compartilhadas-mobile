import React, { useContext } from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import AuthContext from '../contexts/auth';

import CreateExpense from '../pages/CreateExpense';
import CreateGroup from '../pages/groups/CreateGroup';
import JoinGroup from '../pages/groups/JoinGroup';
import Groups from '../pages/groups';

function CustomDrawerContent(props) {
  const { signOut } = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        onPress={() => {
          props.navigation.closeDrawer();

          signOut();
        }}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Cadastrar uma Despesa"
      drawerContentOptions={{ activeTintColor: '#3F51B5' }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Cadastrar uma Despesa" component={CreateExpense} />
      <Drawer.Screen name="Grupos" component={Groups} />
      <Drawer.Screen name="Entrar em um Grupo" component={JoinGroup} />
      <Drawer.Screen name="Criar um Grupo" component={CreateGroup} />
    </Drawer.Navigator>
  );
}
