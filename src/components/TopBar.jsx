import * as React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function TopBar(props, { navigation }) {
  return (
    <>
      <View
        style={{
          // position: 'fixed',
          height: 70,
          width: '100%',
          backgroundColor: '#1DA1F2',
        }}
      >
        <TouchableOpacity
          style={{ marginTop: 30, marginLeft: 10 }}
          onPress={() => {
            // navigation.openDrawer();
          }}
        >
          <Feather name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {props.children}
    </>
  );
}
