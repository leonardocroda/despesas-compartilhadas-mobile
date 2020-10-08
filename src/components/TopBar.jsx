import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';

export default function TopBar(props) {
  return (
    <>
      <Header style={styles.header} androidStatusBarColor="red">
        <Left>
          <Button transparent onPress={() => props.navigation.toggleDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{props.title}</Title>
        </Body>
        <Right></Right>
      </Header>
    </>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: 'red' },
});
