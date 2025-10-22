import React, { useState } from 'react';
import { Alert, ActivityIndicator, FlatList } from 'react-native';
import styled from 'styled-components/native';
import api from '../../service/api';
import { LinearGradient } from 'expo-linear-gradient';

// Estilos
const Container = styled(LinearGradient).attrs({
  colors: ['#000000', '#0D1B2A'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: flex-start; /* começa do topo */
  align-items: center;
  padding: 20px;
  display: flex;
`;

const ContentWrapper = styled.View`
  margin-top: 300px; /* empurra o conteúdo para baixo */
  width: 100%;
  align-items: center;
`;
const Title = styled.Text`
  text-align: center;
  color: #BABACA;
  font-size: 25px;
  margin-bottom: 20px;
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

const RecordContainer = styled.View`
  width: 80%;
  background-color: #1e2a38;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  align-items: center;
`;

const RecordText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  text-align: center;
`;

export default function Historico() {
  const [placa, setPlaca] = useState('');
  const [historico, setHistorico] = useState([]);
  const [loading, setLoading] = useState(false);

  const consultarHistorico = async () => {
    if (!placa) {
      Alert.alert('Erro', 'Por favor, insira a placa do veículo.');
      return;
    }

    setLoading(true);
    try {
      const response = await api.get(`/api/veiculos/placa/${placa.toUpperCase()}`);
      setHistorico(response.data);
      if (response.data.length === 0) {
        Alert.alert('Info', 'Nenhum registro encontrado para esta placa.');
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível consultar o histórico.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <Logo source={require('../../assets/logo.png')} resizeMode="contain" />
        <Title>Histórico do Veículo</Title>

        <Input
          placeholder="Digite a placa"
          value={placa}
          onChangeText={setPlaca}
          autoCapitalize="characters"
        />

        <Btn onPress={consultarHistorico} disabled={loading}>
          <BtnText>{loading ? 'Consultando...' : 'Consultar'}</BtnText>
        </Btn>

        {loading && <ActivityIndicator size="large" color="#42b5b9" />}
      </ContentWrapper>

      <FlatList
        data={historico}
        keyExtractor={(item, index) => `${item.placa}-${index}`}
        contentContainerStyle={{ alignItems: 'center', paddingTop: 20 }}
        renderItem={({ item }) => (
          <RecordContainer>
            <RecordText>Placa: {item.placa}</RecordText>
            <RecordText>Data Entrada: {item.dataEntrada}</RecordText>
            <RecordText>Hora Entrada: {item.horarioEntrada}</RecordText>
            <RecordText>Data Saída: {item.dataSaida || '-'}</RecordText>
            <RecordText>Hora Saída: {item.horarioSaida || '-'}</RecordText>
            <RecordText>Valor Pago: {item.valorPago != null ? `R$ ${item.valorPago}` : '-'}</RecordText>
          </RecordContainer>
        )}
      />
    </Container>
  );
}
