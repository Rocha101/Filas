import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import LinhaTabela from '../components/LinhaTabela';
import React from 'react';
import api from '../services/api';
import { Button } from 'react-native-ui-lib';

export default function Listagem({ navigation }) {

  const [usuarios, setUsuarios] = React.useState([]);

  React.useEffect(() => {
    async function loadUsuarios() {
      const response = await api.get('/api/usuarios.index')
      setUsuarios(response.data)
    }
    loadUsuarios();
  }, [])

  function AbrirCadastro() {
    navigation.navigate('Cadastro')
  }


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button outline margin-5 size={Button.sizes.large} label={'Cadastrar-se'} onPress={() => AbrirCadastro()} />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nome</DataTable.Title>
          <DataTable.Title>Email</DataTable.Title>
          <DataTable.Title>Horário</DataTable.Title>
        </DataTable.Header>
        {usuarios.map((linha) => LinhaTabela(linha))}
      </DataTable>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingEnd: 10,
    paddingTop: 20,
  },
});
