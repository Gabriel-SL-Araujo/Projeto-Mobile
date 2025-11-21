import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function ExperienciaAcademicaScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Experiência Acadêmica</Text>
        <Text style={styles.text}>
          Estudante de Ciência da Computação na UNICAP, com foco em disciplinas
          como Estruturas de Dados, Banco de Dados, Engenharia de Software,
          Redes de Computadores e Qualidade de Software.
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
