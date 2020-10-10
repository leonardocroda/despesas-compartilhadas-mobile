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
  Picker,
  Icon,
} from 'native-base';
import TopBar from '../components/TopBar';

export default function CreateExpense({ navigation }) {
  const [expenseName, setExpenseName] = useState('');
  const [expenseValue, setExpenseValue] = useState('');
  const [type, setType] = useState('');

  return (
    <Container>
      <TopBar navigation={navigation} title="Criar Despesa" />
      <Content>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Nome da Despesa</Label>
            <Input
              value={expenseName}
              onChangeText={(value) => setExpenseName(value)}
            />
          </Item>
          <Item floatingLabel>
            <Label>Valor da Despesa</Label>
            <Input
              value={expenseValue}
              onChangeText={(value) => setExpenseValue(value)}
            />
          </Item>
          <View style={styles.picker}>
            <Text style={styles.pickerLabel}>
              Essa despesa é sua ou de um grupo?
            </Text>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Essa despesa é sua ou de um grupo?"
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor="#007aff"
                itemStyle={styles.pickerItem}
                selectedValue={type}
                onValueChange={(value) => setType(value)}
              >
                <Picker.Item label="Minha" value="user" />
                <Picker.Item label="de um Grupo" value="group" />
              </Picker>
            </Item>
          </View>
        </Form>
        <View style={styles.buttons}>
          <Button block light style={{ width: '45%' }}>
            <Text>Cancelar</Text>
          </Button>
          <Button block style={{ width: '45%' }}>
            <Text>Salvar</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  form: {
    padding: 10,
  },
  picker: {
    marginLeft: 10,
    marginTop: 10,
    width: '95%',
  },
  pickerLabel: {
    fontSize: 16,
    color: 'gray',
  },
  pickerItem: {
    color: 'red',
  },
});
