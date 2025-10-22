import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login';
import styled from "styled-components/native";
import Opção from './src/screens/opções';
import Cadastro from './src/screens/Cadastro';
import Editar from './src/screens/Editar'

const ContainerApp = styled.SafeAreaView`
  flex: 1;
`



export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden />
      {/* <Login /> */}
       {/* <Opção/>  */}
     {/* <Cadastro/> */}
      <Editar/>
    </ContainerApp>

  );
}
