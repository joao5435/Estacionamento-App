import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Alert, ActivityIndicator } from 'react-native';
import api from '../../service/api';
import { LinearGradient } from 'expo-linear-gradient';

// Estilos
const SaidaContainer = styled(LinearGradient).attrs({
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

export default function Saida() {
  const [placa, setPlaca] = useState('');
  const [loading, setLoading] = useState(false);

  const liberarSaida = async () => {
    if (!placa) {
      Alert.alert('Atenção', 'Digite a placa do veículo!');
      return;
    }

    setLoading(true);

    try {
      const response = await api.put('/api/veiculos/saida', { placa });

      const veiculo = response.data.veiculo;

      Alert.alert(
        'Saída Liberada',
        `Veículo: ${veiculo.placa}\nHorário de Entrada: ${veiculo.horarioEntrada}\nHorário de Saída: ${veiculo.horarioSaida}\nValor Pago: R$ ${veiculo.valorPago}`
      );

      setPlaca(''); // limpa input
    } catch (error) {
      console.error('Erro ao liberar saída:', error.response?.data || error.message);
      Alert.alert(
        'Erro',
        error.response?.data?.mensagem || 'Não foi possível liberar a saída!'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SaidaContainer>
      <Logo source={require('../../assets/logo.png')} resizeMode="contain" />

      <Title>Saída do Veículo</Title>

      <Input
        placeholder="Insira a Placa"
        value={placa}
        onChangeText={setPlaca}
      />

      <Btn onPress={liberarSaida} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <BtnText>Confirmar Saída</BtnText>}
      </Btn>
    </SaidaContainer>
  );
}
