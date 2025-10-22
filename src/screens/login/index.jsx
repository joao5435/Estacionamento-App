import React, { useState } from "react";
import styled from "styled-components/native";
import { Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import api from "../../service/api";

const LoginContainer = styled(LinearGradient).attrs({
  colors: ["#000000", "#0D1B2A"],
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
  color: #babaca;
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

const BtnLogin = styled.TouchableOpacity`
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

const CriarConta = styled.TouchableOpacity`
  margin-top: 15px;
`;

const CriarContaText = styled.Text`
  color: #42b5b9;
  font-size: 15px;
`;

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }

    setLoading(true);

    try {
      // Fazendo o POST para o endpoint de login
      const response = await api.post("/auth/login", {
        email: email,
        senha: senha,
      });

      const { token } = response.data;

      if (token) {
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        console.log("Token recebido:", token);

        // Você pode salvar o token para usar depois em requisições protegidas:
        // await AsyncStorage.setItem("token", token);

        // E navegar para a tela principal do app
        navigation.navigate("Opção", { token });
      } else {
        Alert.alert("Erro", "Token não retornado pela API.");
      }
    } catch (error) {
      console.error("Erro ao logar:", error.response?.data || error.message);
      Alert.alert(
        "Erro no login",
        error.response?.data?.message || "Usuário ou senha inválidos!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <Logo source={require("../../assets/logo.png")} resizeMode="contain" />

      <Title>Faça Login</Title>

      <Input
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Input
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <BtnLogin onPress={handleLogin} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <BtnText>Entrar</BtnText>}
      </BtnLogin>

      <CriarConta onPress={() => navigation.navigate("Cadastro_Usuario")}>
        <CriarContaText>Não tem conta? Crie uma</CriarContaText>
      </CriarConta>
    </LoginContainer>
  );
}
