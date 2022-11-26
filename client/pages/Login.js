import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { View, Text, Checkbox, Image } from 'react-native-ui-lib';
import React from 'react';
import { Typography, Button } from 'react-native-ui-lib';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import api from '../services/api';
import { Colors } from 'react-native-ui-lib';

Colors.loadColors({
  error: '#ff2442',
  success: '#038a7d',
  text: '#20303C'
});


export default function Login({ navigation }) {
  const [email, setEmail] = React.useState("")
  const [senha, setSenha] = React.useState("")
  const [selecionado, setSelecionado] = React.useState(false);


  async function BuscarLogin() {
    try {
      const jsonValue = await AsyncStorage.getItem("@usuario");
      if (jsonValue !== null) {
        const usuarioRecuperado = JSON.parse(jsonValue);
        return usuarioRecuperado;
      }
    } catch (e) {
      console.log('Erro ao salvar login na memória!')
    }
    return {
      nome: "",
      email: "",
    };
  }

  React.useEffect(() => async function restoreUsuarioSalvo() {
    const restoredUsuario = await BuscarLogin();
    setEmail(restoredUsuario.email);
    setSenha(restoredUsuario.senha)
  }, [])

  Typography.loadTypographies({
    h5: { fontSize: 14, fontWeight: '100', lineHeight: 20 },
  });

  // async function TentarLogin() {
  //   if (selected === true) {
  //     const jsonValue = JSON.stringify({ email: email, senha: senha });
  //     await AsyncStorage.setItem("@usuario", jsonValue);
  //   }
  //   const data = {
  //     email_usuario: email,
  //     senha_usuario: senha,
  //   };

  //   const response = await api.post('/api/login', data);

  //   if (response.status == 200) {
  //     navigation.navigate('Listagem');
  //   }
  //   else {
  //     alert('Erro ao encontrar o usuario!')
  //   }
  // }

  async function IrCadastro() {
    navigation.navigate('Signup');
  }

  async function IrLogin() {
    navigation.navigate('Listagem');
  }

  function selected() {
    setSelecionado(!selecionado)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Filas</Text>
      <View style={styles.ViewInputTexto}>
        <TextInput label="E-mail" mode='outlined' value={email} onChangeText={(email) => setEmail(email)} placeholder="E-mail"></TextInput>
        <TextInput label="Senha" mode='outlined' value={senha} onChangeText={(senha) => setSenha(senha)} placeholder="Senha" autoComplete='password' secureTextEntry></TextInput>
      </View>
      <View marginT-0 style={styles.ViewInputTexto}>
        <Button margin-5 size={Button.sizes.large} onPress={() => IrLogin()} label={'Entrar'} backgroundColor={Colors.success} />
        <Button outline margin-5 size={Button.sizes.large} label={'Cadastrar-se'} onPress={() => IrCadastro()} outlineColor={Colors.success} />
        <View center marginT-10>
          <Checkbox value={selecionado} label={'Lembrar Login'} onValueChange={() => selected()} color={Colors.success} />
        </View>
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
})