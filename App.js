import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login';
import styled, { ThemeProvider } from "styled-components/native";
import Opção from './src/screens/opções';
import Cadastro from './src/screens/Cadastro';
import Historico from './src/screens/Historico'
import Saida from './src/screens/Saida'
import Cadastro_Usuario from './src/screens/Cadastro_Usuario';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screenOptions:{
    headerShown: false
  },
  screens: {
    Home: Login,
    Saida: Saida,
    Opção: Opção,
    Historico: Historico,
    Cadastro: Cadastro,
    Cadastro_Usuario: Cadastro_Usuario
  } 
}
)
const Navigation = createStaticNavigation(RootStack)

const ContainerApp = styled.SafeAreaView`
  flex: 1;
`



export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden />
       
       <Navigation/>
      
    </ContainerApp>

  );
}
