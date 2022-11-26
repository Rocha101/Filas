import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { View, Text } from 'react-native-ui-lib';
import React from 'react';
import Constants from 'expo-constants';
import api from '../services/api';
import { Colors } from 'react-native-ui-lib';

Colors.loadColors({
  error: '#ff2442',
  success: '#038a7d',
  text: '#20303C'
});

export default function Cadastro({ navigation }) {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [horario, setHorario] = React.useState('');

  async function handleSubmit() {
    const data = {
      nome_usuario: nome,
      email_usuario: email,
      horario_usuario: horario,
      senha_usuario: password,
    };

    const response = await api.post('/api/usuarios', data);

    if (response.status == 200) {
      navigation.navigate('Listagem');
    }
    else {
      alert('Erro ao cadastrar o usuario!')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Filas</Text>
      <View style={styles.ViewInputTexto}>
        <TextInput
          mode="outlined"
          label="Nome"
          placeholder="Nome"
          value={nome}
          onChangeText={(nome) => setNome(nome)}></TextInput>
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Email"
          style={styles.InputEmail}
          value={email}
          onChangeText={(email) => setEmail(email)}></TextInput>
        <TextInput
          mode="outlined"
          label="Senha"
          placeholder="Senha"
          value={password}
          onChangeText={(password) => setPassword(password)}
          autoComplete="password"
          secureTextEntry></TextInput>
        <TextInput
          mode="outlined"
          label="Horário"
          placeholder="Horário"
          value={horario}
          onChangeText={(horario) => setHorario(horario)}></TextInput>
      </View>
      <Button
        icon="account-arrow-right"
        style={styles.botao}
        onPress={() => handleSubmit()}
        mode="outlined"
        color={Colors.success}>
        Cadastrar
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFF',
    padding: 8,
  },
  Titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  botao: {
    alignSelf: 'center',
    marginTop: 10,
  },
});
