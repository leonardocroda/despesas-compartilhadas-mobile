import React from 'react';
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

export default function CreateExpense({ navigation }) {
  return (
    <Container>
      <TopBar navigation={navigation} title="Criar Despesa" />
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Nome da Despesa</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Valor da Despesa</Label>
            <Input />
          </Item>
        </Form>
        <View
          style={{
            marginTop: 30,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <Button block light style={{ width: '45%' }}>
            <Text>Cancelar</Text>
          </Button>
          <Button block style={{ width: '45%', backgroundColor: 'red' }}>
            <Text>Salvar</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}
