import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function ProjetosScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Projetos Desenvolvidos</Text>
        <Text style={styles.text}>
          Nesta seção serão apresentados alguns dos principais projetos que eu
          desenvolvi, incluindo aplicações web, scripts em Python, projetos
          acadêmicos e experimentos com testes automatizados e React Native.
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
