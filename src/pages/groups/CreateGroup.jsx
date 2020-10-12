import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';
import api from '../../services/api';
import AuthContext from '../../contexts/auth';

export default function CreateGroup({ navigation }) {
  const [name, setName] = useState('');
  const { user } = useContext(AuthContext);

  const submitForm = async () => {
    const data = {
      name: name,
    };

    const group = await api.groups.create(data);
    await api.groups.addUser(group.id, user.id);
    navigation.navigate('Cadastrar uma Despesa');
  };

  return (
    <Container>
      <Content>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Nome do Grupo</Label>
            <Input value={name} onChangeText={(value) => setName(value)} />
          </Item>
          <Button block style={styles.button} onPress={submitForm}>
            <Text>Criar</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
  },
  buttons: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  form: {
    padding: 10,
  },
});
