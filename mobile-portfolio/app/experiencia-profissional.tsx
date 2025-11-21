import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function ExperienciaProfissionalScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Experiência Profissional</Text>
        <Text style={styles.text}>
          Atuação na área de testes de software, com foco em automação, análise
          de qualidade, criação de casos de teste e integração com ferramentas
          de CI/CD. Trabalho com linguagens como Python e Java, além de
          frameworks e boas práticas de QA.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#020617",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#f9fafb",
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: "#e5e7eb",
    lineHeight: 20,
  },
});
