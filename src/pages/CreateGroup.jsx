import React, { useState } from 'react';
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
import TopBar from '../components/TopBar';
import api from '../services/api';

export default function CreateGroup({ navigation }) {
  const [name, setName] = useState('');

  const submitForm = async () => {
    const data = {
      name: name,
    };

    try {
      await api.post('groups', data);
      console.log('grupo criado');
      navigation.navigate('Cadastrar Despesa');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <TopBar navigation={navigation} title="Criar  Group" />
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
