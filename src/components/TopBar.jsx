import * as React from 'react';
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';

export default function TopBar(props) {
  return (
    <>
      <Header style={{ backgroundColor: 'red' }} androidStatusBarColor="red">
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
