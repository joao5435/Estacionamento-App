import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Alert, ActivityIndicator } from 'react-native';
import api from '../../service/api';
import { LinearGradient } from 'expo-linear-gradient';

// Estilos
const CadastroContainer = styled(LinearGradient).attrs({
  colors: ['#000000', '#0D1B2A'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Title = styled.Text`
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

export default function CadastroVeiculo() {
  const [placa, setPlaca] = useState('');
  const [loading, setLoading] = useState(false);

  const cadastrarVeiculo = async () => {
    if (!placa) {
      Alert.alert('Atenção', 'Digite a placa do veículo!');
      return;
    }

    setLoading(true);

    try {
      const response = await api.post('/api/veiculos/entrada', { placa });

      // Mostra sucesso
      Alert.alert('Sucesso', response.data.mensagem || 'Entrada registrada com sucesso!');
      console.log('Veículo cadastrado:', response.data.veiculo);

      setPlaca(''); // limpa o input
    } catch (error) {
      console.error('Erro ao cadastrar veículo:', error.response?.data || error.message);
      Alert.alert(
        'Erro',
        error.response?.data?.mensagem || 'Não foi possível cadastrar a placa!'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <CadastroContainer>
      <Logo source={require('../../assets/logo.png')} resizeMode="contain" />

      <Title>Cadastre o Veículo</Title>

      <Input
        placeholder="Insira a Placa"
        value={placa}
        onChangeText={setPlaca}
      />

      <Btn onPress={cadastrarVeiculo} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <BtnText>Registrar</BtnText>}
      </Btn>
    </CadastroContainer>
  );
}
