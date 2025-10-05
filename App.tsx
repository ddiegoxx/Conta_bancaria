import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";
import {Text, StyleSheet } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Olá, React Native!</Text>
        <Text>Construindo apps nativos com JavaScript/TypeScript.</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "600", marginBottom: 8 },
});