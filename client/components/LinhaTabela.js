import { DataTable } from 'react-native-paper';

export default function LinhaTabela(props) {
  return (
    <DataTable.Row key={props._id} id={props._id}>
      <DataTable.Cell>{props.nome_usuario}</DataTable.Cell>
      <DataTable.Cell>{props.email_usuario}</DataTable.Cell>
      <DataTable.Cell>{props.horario_usuario}</DataTable.Cell>
    </DataTable.Row>
  );
}