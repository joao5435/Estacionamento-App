
# 🚗 Estacionamento App

[![Node.js](https://img.shields.io/badge/Node.js-v18-green)](https://nodejs.org/) 
[![React Native](https://img.shields.io/badge/React%20Native-0.79.6-blue)](https://reactnative.dev/) 
[![Expo](https://img.shields.io/badge/Expo-54.0.17-purple)](https://expo.dev/) 
[![License](https://img.shields.io/badge/License-MIT-lightgrey)](LICENSE)

Aplicativo **mobile** desenvolvido em **React Native com Expo**, voltado para gerenciamento de estacionamentos, incluindo cadastro de veículos, histórico de entradas/saídas e interface moderna.

---

## 🎯 Funcionalidades

- ✅ Cadastro de veículos e usuários  
- ✅ Consulta de histórico de entrada e saída  
- ✅ Interface moderna com **Styled Components**  
- ✅ Build para Android via **EAS Build**  

---

## 🛠 Tecnologias

- **React Native** – Desenvolvimento mobile  
- **Expo** – Gerenciamento e build de app  
- **Styled Components** – Estilização de componentes  
- **React Navigation** – Navegação entre telas  
- **Axios** – Requisições HTTP  
- **Node.js + MySQL** – Backend e persistência de dados  

---

## 💻 Pré-requisitos

- Node.js >= 18  
- npm >= 9  
- Expo CLI local (via `npx expo`)  
- Git  

---

## ⚡ Instalação

```bash
git clone https://github.com/joao5435/Estacionamento-App.git
cd Estacionamento-App
npm install
# ou
yarn install
````

> Lembre-se de criar o arquivo `.env` caso precise configurar variáveis de ambiente.

---

## 🚀 Execução

* Android:

```bash
npx expo start --android
```

* iOS (simulador):

```bash
npx expo start --ios
```

* Web:

```bash
npx expo start --web
```

---

## 📦 Build para Android

Build APK/AAB gerado com **EAS Build**:

[🔗 Baixar build mais recente](https://expo.dev/artifacts/eas/ccNJCvsV93GwndR4n1zbio.aab)

Comando para gerar build:

```bash
eas build --platform android
```

---

## 📁 Estrutura do projeto

```
Estacionamento-App/
├── src/
│   ├── screens/       # Telas do app
│   ├── components/    # Componentes reutilizáveis
│   ├── services/      # Requisições HTTP
│   └── styles/        # Estilos
├── App.js
├── package.json
├── eas.json           # Configurações do EAS Build
└── README.md
```

---

## 🤝 Contribuição

1. Faça fork do repositório
2. Crie uma branch: `git checkout -b feature/nome-da-feature`
3. Commit suas alterações: `git commit -m "Descrição da feature"`
4. Push para a branch: `git push origin feature/nome-da-feature`
5. Abra um Pull Request

---

## 📝 Licença

[MIT License](LICENSE)

---

## 🔗 Links úteis

* [Documentação Expo](https://docs.expo.dev/)
* [Documentação React Native](https://reactnative.dev/docs/getting-started)
* [Styled Components](https://styled-components.com/docs)
