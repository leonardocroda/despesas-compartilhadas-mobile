import React, { useState, useContext } from 'react';
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
import AuthContext from '../contexts/auth';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  async function handleSignIn() {
    await signIn(email, password);
  }

  return (
    <>
      <Container>
        <Form style={styles.form}>
          <Item floatingLabel>
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
            <Button block style={styles.button} onPress={handleSignIn}>
              <Text>Entrar</Text>
            </Button>
          </View>
          <Button
            transparent
            style={styles.createAccount}
            onPress={() => navigation.navigate('Criar Conta')}
          >
            <Text>Não possui uma conta? Criar conta</Text>
          </Button>
        </Form>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: '90%',
  },
  form: {
    padding: 10,
  },
  createAccount: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 70,
    width: '100%',
  },
});
