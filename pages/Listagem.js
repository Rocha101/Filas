import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import LinhaTabela from '../components/LinhaTabela';
import React from 'react';
import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Listagem({ navigation }) {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function loadUsuarios() {
      const response = await api.get('/api/usuarios.index')
      console.log(response.data)
      setUsuarios(response.data)
    }
    loadUsuarios();
  }, [])


  return (
    <ScrollView contentContainerStyle={styles.container}>
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
