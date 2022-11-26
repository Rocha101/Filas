import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import React from 'react';
import { Typography, Button } from 'react-native-ui-lib';
import { TextInput } from 'react-native-paper';
import { Colors } from 'react-native-ui-lib';

Colors.loadColors({
  error: '#ff2442',
  success: '#038a7d',
  text: '#20303C'
});


export default function Signup({ navigation }) {
  const [email, setEmail] = React.useState("")
  const [nome, setNome] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [usuarios, setUsuarios] = React.useState([]);

  Typography.loadTypographies({
    h5: { fontSize: 14, fontWeight: '100', lineHeight: 20 },
  });

  async function TentarLogin() {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Filas</Text>
      <View style={styles.ViewInputTexto}>
        <TextInput label="Nome" mode='outlined' style={styles.InputEmail} value={nome} onChangeText={(nome) => setNome(nome)} placeholder="Nome"></TextInput>
        <TextInput label="E-mail" mode='outlined' style={styles.InputEmail} value={email} onChangeText={(email) => setEmail(email)} placeholder="E-mail"></TextInput>
        <TextInput label="Senha" mode='outlined' style={styles.InputSenha} value={password} onChangeText={(password) => setPassword(password)} placeholder="Senha" autoComplete='password' secureTextEntry></TextInput>
      </View>
      <View marginT-0 style={styles.ViewInputTexto}>
        <Button outline margin-5 size={Button.sizes.large} label={'Cadastrar-se'} onPress={() => TentarLogin()} outlineColor={Colors.success} />
        <Button margin-5 hyperlink label={'Já Tenho um Cadastro'} onPress={() => TentarLogin()} color={Colors.grey10} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  Titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },
  Subtitulo: {
    fontSize: 20,
    fontWeight: 'regular',
    color: '#000',
  },
  ViewInputTexto: {
    marginVertical: 20,
    width: 300,
  },
  BotaoAdd: {
    fontSize: 18,
  }
});