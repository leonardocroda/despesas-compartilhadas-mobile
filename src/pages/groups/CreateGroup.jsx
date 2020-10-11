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
  View,
} from 'native-base';
import TopBar from '../../components/TopBar';
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
      <TopBar navigation={navigation} title="Criar um Grupo" />
      <Content>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Nome do Grupo</Label>
            <Input value={name} onChangeText={(value) => setName(value)} />
          </Item>
        </Form>
        <View style={styles.buttons}>
          <Button block light style={styles.button}>
            <Text>Cancelar</Text>
          </Button>
          <Button block style={styles.button} onPress={submitForm}>
            <Text>Salvar</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '45%',
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
