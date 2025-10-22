import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

// Estilos
const OpçãoContainer = styled(LinearGradient).attrs({
  colors: ['#000000', '#0D1B2A'], // preto para azul escuro
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Text = styled.Text`
    text-align: center;
    color: #BABACA;
    padding: 20px;
    margin-top: 30px;
    font-size: 25px;
`;
const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
`;

const Input = styled.TextInput`
  width: 100%;
 background-color: white;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
`;

const Btn = styled.TouchableOpacity`
  background-color: #42b5b9;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const BtnText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

const ForgotPassword = styled.TouchableOpacity`
  margin-top: 15px;
`;

const ForgotPasswordText = styled.Text`
  color: #42b5b9;
`;


export default function Opção() {
   const navigation = useNavigation()
  return (
    <OpçãoContainer>

      
      <Logo source={require('../../assets/logo.png')} resizeMode="contain" />

      <Text>Selecione Uma Opção</Text>

      {/* Botão Entrar */}
     <Btn onPress={() => navigation.navigate("Cadastro")}>
        <BtnText>Cadastrar Veiculo</BtnText>
      </Btn>
      <Btn onPress={() => navigation.navigate("Saida")}>
        <BtnText>Consultar Saida</BtnText>
      </Btn>
      <Btn onPress={() => navigation.navigate("Historico")}>
        <BtnText>Consultar Historico</BtnText>
      </Btn>
      
    </OpçãoContainer>
  );
}
