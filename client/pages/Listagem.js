import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { DataTable } from 'react-native-paper';
import LinhaTabela from '../components/LinhaTabela';
import React from 'react';
import api from '../services/api';
import { Button } from 'react-native-ui-lib';
import { Colors } from 'react-native-ui-lib';

Colors.loadColors({
  error: '#ff2442',
  success: '#038a7d',
  text: '#20303C'
});

export default function Listagem({ navigation }) {

  const [usuarios, setUsuarios] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

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

  async function loadUsuarios() {
    const response = await api.get('/api/usuarios.index')
    setUsuarios(response.data)
    setRefreshing(false)
  }


  return (
    <ScrollView contentContainerStyle={styles.container} refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={()=>loadUsuarios()} />}>
      <Button outline margin-5 size={Button.sizes.large} label={'Cadastrar-se'} onPress={() => AbrirCadastro()} outlineColor={Colors.success}/>
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
