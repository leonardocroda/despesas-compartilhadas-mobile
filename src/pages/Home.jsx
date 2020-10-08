import React, { Component } from 'react';
import { TextInput, View, Text, KeyboardAvoidingView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import TopBar from '../components/TopBar';

export default function Home({ navigation }) {
  const [expense, expenseChange] = React.useState('Despesa');
  const [value, valueChange] = React.useState('Valor');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TopBar navigation={navigation} title="Criar Despesa" />
      <Text style={{ fontSize: 26, marginBottom: 15 }}>Registrar Despesa</Text>
      <TextInput
        style={{
          height: 60,
          backgroundColor: '#FFF',
          borderRadius: 10,
          marginBottom: 8,
          paddingHorizontal: 24,
          fontSize: 16,
          width: '90%',
        }}
        onChangeText={(text) => expenseChange(text)}
        value={expense}
      />
      <TextInput
        style={{
          height: 60,
          backgroundColor: '#FFF',
          borderRadius: 10,
          marginBottom: 8,
          paddingHorizontal: 24,
          fontSize: 16,
          width: '90%',
        }}
        onChangeText={(text) => valueChange(text)}
        value={value}
      />
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'space-between',
        }}
      >
        <RectButton
          onPress={() => navigation.navigate('Cadastrar Grupo')}
          style={{
            height: 50,
            width: '48%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 24,
            fontSize: 16,
            borderRadius: 10,
            backgroundColor: '#AAB8C2',
          }}
        >
          <Text style={{ color: 'white' }}>Sair</Text>
        </RectButton>
        <RectButton
          onPress={() => navigation.navigate('Cadastrar Grupo')}
          style={{
            height: 50,
            width: '48%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 24,
            fontSize: 16,
            borderRadius: 10,
            backgroundColor: '#1DA1F2',
          }}
        >
          <Text style={{ color: 'white' }}>Salvar</Text>
        </RectButton>
      </View>
    </KeyboardAvoidingView>
  );
}
