import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  View,
} from 'native-base';
import api from '../services/api';

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitForm = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    try {
      api.users.create(data).then(() => navigation.navigate('Entrar'));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Container>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Nome</Label>
            <Input onChangeText={(value) => setName(value)} value={name} />
          </Item>
          <Item floatingLabel last>
            <Label>E-mail</Label>
            <Input value={email} onChangeText={(value) => setEmail(value)} />
          </Item>
          <Item floatingLabel last>
            <Label>Senha</Label>
            <Input
              secureTextEntry
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
          </Item>
          <View style={styles.buttons}>
            <Button block style={styles.button} onPress={submitForm}>
              <Text>Criar Usuário</Text>
            </Button>
          </View>
        </Form>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 10,
  },
  buttons: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: '90%',
  },
});
