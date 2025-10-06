# 💳 App Abrir Conta Bancária

## 📘 Descrição
Aplicativo desenvolvido em **React Native com Expo** para simular a abertura de uma conta bancária.  
O app permite que o usuário insira dados pessoais, escolha o limite da conta e informe se é estudante.  
Após a validação dos campos, é exibida uma mensagem com o resumo da conta criada.

---

## ⚙️ Funcionalidades

- Campo **Nome** (TextInput) — obrigatório  
- Campo **Idade** (TextInput numérico) — obrigatório e ≥ 18  
- Campo **Sexo** (Picker) — “Masculino”, “Feminino” ou “Outro”  
- **Slider** para limite da conta (R$ 500 a R$ 10.000)  
- **Switch** para indicar se é estudante  
- Botão **Abrir Conta** que valida os campos e mostra os dados cadastrados  
- Exibição de mensagens de erro e limpeza dos campos após criar a conta  

---

## 🧩 Tecnologias Utilizadas

- React Native  
- Expo  
- @react-native-picker/picker  
- @react-native-community/slider  

---

## ▶️ Instruções de Execução

### 1️⃣ Instalar o Expo CLI (caso ainda não tenha)
npm install -g expo-cli

### 2️⃣ Clonar o projeto ou criar um diretório e adicionar o código

git clone https://github.com/ddiegoxx/Conta_bancaria.git
cd abrir-conta-bancaria

### 3️⃣ Instalar as dependências do projeto

npm install

### 4️⃣ Instalar os módulos necessários

npx expo install @react-native-picker/picker @react-native-community/slider

### 5️⃣ Executar o aplicativo

npx expo start

### 📱 Como testar:

Escaneie o QR Code gerado no terminal com o app Expo Go (Android/iOS);

Ou pressione a para abrir no emulador Android;

Ou pressione i para abrir no simulador iOS (Mac).

### 👨‍💻 Autor
Diego Martinez
Projeto prático — Desenvolvimento Mobile (React Native)

### Comando principal de execução:

npx expo start
