import React, { useState } from "react";
import styled from "styled-components/native";
import { Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import api from "../../service/api";

const CadastroContainer = styled(LinearGradient).attrs({
  colors: ["#000000", "#0D1B2A"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Titulo = styled.Text`
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

export default function Cadastro_Usuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const validarFormulario = () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return false;
    }
    return true;
  };

  const cadastrarUsuario = async () => {
    if (!validarFormulario()) return;

    setLoading(true);

    try {
      const resposta = await api.post("/auth/register", {
        nome,
        email,
        senha,
      });

      console.log("Resposta da API:", resposta.data);

      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");

      setNome("");
      setEmail("");
      setSenha("");
    } catch (erro) {
      console.error("Erro no cadastro:", erro.response?.data || erro.message);

      const mensagemErro =
        erro.response?.data?.message || "Erro ao cadastrar o usuário.";

      Alert.alert("Erro", mensagemErro);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CadastroContainer>
      <Logo source={require("../../assets/logo.png")} resizeMode="contain" />
      <Titulo>Cadastre um usuário</Titulo>

      <Input
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

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

      <Btn onPress={cadastrarUsuario} disabled={loading}>
        <BtnText>{loading ? "Cadastrando..." : "Criar"}</BtnText>
      </Btn>
    </CadastroContainer>
  );
}
