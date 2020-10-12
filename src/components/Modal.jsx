import React, { useState, useContext } from 'react';
import { Button, Icon, Left, List, ListItem, Right, Text } from 'native-base';
import { Modal } from 'react-native';
import AuthContext from '../contexts/auth';

export default function ModalComponent(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const { signOut } = useContext(AuthContext);

  return (
    <>
      <Button
        transparent
        style={{ color: '#fff' }}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Icon name="menu" style={{ color: '#fff' }} />
      </Button>
      <Modal
        animationType="slide"
        visible={modalVisible}
        style={{ width: 20, height: 20 }}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <List>
          <ListItem
            onPress={() => {
              props.navigation.navigate('Cadastrar uma Despesa');
              setModalVisible(!modalVisible);
            }}
          >
            <Left>
              <Text>Cadastrar Despesa</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem
            onPress={() => {
              props.navigation.navigate('Grupos');
              setModalVisible(!modalVisible);
            }}
          >
            <Left>
              <Text>Meus Grupos</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem
            onPress={() => {
              props.navigation.navigate('Criar um Grupo');
              setModalVisible(!modalVisible);
            }}
          >
            <Left>
              <Text>Criar Grupo</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={() => setModalVisible(!modalVisible)}>
            <Text>Fechar</Text>
          </ListItem>
          <ListItem
            onPress={() => {
              signOut();
              setModalVisible(!modalVisible);
            }}
          >
            <Text>Sair</Text>
          </ListItem>
        </List>
      </Modal>
    </>
  );
}
