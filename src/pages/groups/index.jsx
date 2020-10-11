import React, { useState, useEffect, useContext } from 'react';
import { Button, Icon, Left, List, ListItem, Right, Text } from 'native-base';
import api from '../../services/api';
import TopBar from '../../components/TopBar';
import { ScrollView } from 'react-native-gesture-handler';
import AuthContext from '../../contexts/auth';

export default function Groups({ navigation }) {
  const [groups, setGroups] = useState([]);
  const [load, setLoad] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.users.groups(user.id).then((response) => setGroups(response.data));
    navigation.addListener('focus', () => setLoad(!load));
  }, [load, navigation]);

  return (
    <>
      <TopBar navigation={navigation} title="Meus Grupos" />
      <ScrollView>
        <List>
          {groups.map((group) => {
            return (
              <ListItem key={group.id} onPress={() => console.log(group.name)}>
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
        <Button block onPress={() => navigation.navigate('Criar um Grupo')}>
          <Text>Criar Grupo</Text>
        </Button>
        <Button
          block
          transparent
          onPress={() => navigation.navigate('Entrar em um Grupo')}
        >
          <Text>Entrar em um Grupo</Text>
        </Button>
      </ScrollView>
    </>
  );
}
