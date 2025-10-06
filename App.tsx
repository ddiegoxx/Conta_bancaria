import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  Alert, 
  Switch, 
  StyleSheet 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [limite, setLimite] = useState(2500);
  const [estudante, setEstudante] = useState(false);

  // 🧩 Estados para mostrar o resultado na tela
  const [contaCriada, setContaCriada] = useState(false);
  const [resumoConta, setResumoConta] = useState('');

  // ✅ Função que valida se o formulário está completo
  const isFormValid = () => {
    if (!nome.trim()) return false;
    if (!idade || isNaN(Number(idade)) || Number(idade) < 18) return false;
    if (!sexo) return false;
    if (!limite || limite < 500 || limite > 10000) return false;
    return true;
  };

  // 🚀 Função chamada ao clicar no botão
  const abrirConta = () => {
    if (!isFormValid()) {
      Alert.alert('Erro', 'Preencha todos os campos corretamente antes de prosseguir.');
      setContaCriada(false);
      return;
    }

    // Se tudo estiver certo, exibe no Alert e na tela
    Alert.alert(
      'Conta criada com sucesso!',
      `Resumo da conta:\n\nNome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nLimite: R$ ${limite.toFixed(2)}\nEstudante: ${estudante ? 'Sim' : 'Não'}`
    );

    const resumo = `
      Nome: ${nome}
      Idade: ${idade}
      Sexo: ${sexo}
      Limite: R$ ${limite.toFixed(2)}
      Estudante: ${estudante ? 'Sim' : 'Não'}
    `;

    setResumoConta(resumo.trim());
    setContaCriada(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Abrir Conta Bancária</Text>

      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text>Idade:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <Text>Sexo:</Text>
      <Picker
        selectedValue={sexo}
        onValueChange={setSexo}
        style={styles.picker}
      >
        <Picker.Item label="Selecione..." value="" />
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
        <Picker.Item label="Outro" value="Outro" />
      </Picker>

      <Text>Limite da Conta: R$ {limite.toFixed(2)}</Text>
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={500}
        maximumValue={10000}
        step={100}
        value={limite}
        onValueChange={setLimite}
        minimumTrackTintColor="#4CAF50"
        maximumTrackTintColor="#888"
      />

      <View style={styles.switchContainer}>
        <Text>É estudante?</Text>
        <Switch value={estudante} onValueChange={setEstudante} />
      </View>

      {/* 🔘 Botão desabilitado até que o formulário seja válido */}
      <Button 
        title="Abrir Conta" 
        onPress={abrirConta} 
        disabled={!isFormValid()} 
        color="#4CAF50"
      />

      {/* ✅ Exibe o resumo da conta criada na tela */}
      {contaCriada && (
        <View style={styles.resultadoBox}>
          <Text style={styles.resultadoTitulo}>Conta criada com sucesso!</Text>
          <Text style={styles.resultadoTexto}>{resumoConta}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    marginBottom: 10,
    borderRadius: 6,
  },
  picker: {
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  resultadoBox: {
    marginTop: 20,
    backgroundColor: '#E8F5E9',
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
  },
  resultadoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },
  resultadoTexto: {
    color: '#1B5E20',
    fontSize: 15,
    lineHeight: 22,
  },
});