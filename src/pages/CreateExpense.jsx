import React, { useState, useContext, useEffect } from 'react';
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
import AuthContext from '../contexts/auth';
import api from '../services/api';

export default function CreateExpense({ navigation }) {
  const [expenseName, setExpenseName] = useState('');
  const [expenseValue, setExpenseValue] = useState('');
  const [type, setType] = useState('user');
  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState('');

  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.users.groups(user.id).then((response) => setGroups(response.data));
  }, [type]);

  const createExpense = async () => {
    const data = {
      name: expenseName,
      value: parseFloat(expenseValue),
    };
    if (type == 'user') await api.expenses.create(type, user.id, data);
    if (type == 'group') await api.expenses.create(type, group, data);
    setExpenseName('');
    setExpenseValue('');
    setType('user');
    setGroups([]);
    setGroup('');
  };

  return (
    <Container>
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
              keyboardType="numeric"
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
            {type == 'group' && (
              <>
                <Text style={styles.pickerLabel}>Qual grupo?</Text>

                <Item picker>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    placeholder="Grupo"
                    placeholderStyle={{ color: '#bfc6ea' }}
                    placeholderIconColor="#007aff"
                    itemStyle={styles.pickerItem}
                    selectedValue={group}
                    onValueChange={(value) => setGroup(value)}
                  >
                    {groups.map((group) => (
                      <Picker.Item
                        key={group.id}
                        label={group.name}
                        value={group.id}
                      />
                    ))}
                  </Picker>
                </Item>
              </>
            )}
          </View>
          <Button block onPress={createExpense} style={styles.button}>
            <Text>Salvar</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: { marginTop: 30 },
  form: {
    padding: 10,
  },
  picker: {
    marginLeft: 10,
    marginTop: 20,
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
