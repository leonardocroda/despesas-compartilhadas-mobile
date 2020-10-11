import React, { useState, useEffect, useContext } from 'react';
import { Button, Icon, Left, List, ListItem, Right, Text } from 'native-base';
import api from '../../services/api';
import TopBar from '../../components/TopBar';
import { ScrollView } from 'react-native-gesture-handler';
import AuthContext from '../../contexts/auth';

export default function JoinGroup({ navigation }) {
  const [groups, setGroups] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.groups.list().then((response) => setGroups(response));
  }, []);

  const joinGroup = async (groupId) => {
    await api.groups.addUser(groupId, user.id);
    navigation.navigate('Cadastrar uma Despesa');
  };

  return (
    <>
      <TopBar navigation={navigation} title="Entrar em um Grupo" />
      <ScrollView>
        <List>
          {groups.map((group) => {
            return (
              <ListItem key={group.id} onPress={() => joinGroup(group.id)}>
                <Left>
                  <Text>{group.name}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            );
          })}
        </List>
        <Button
          block
          transparent
          onPress={() => navigation.navigate('Criar um Grupo')}
        >
          <Text>Criar Grupo</Text>
        </Button>
      </ScrollView>
    </>
  );
}
