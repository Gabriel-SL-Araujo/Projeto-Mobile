import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function SobreScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Sobre mim</Text>
        <Text style={styles.text}>
          Aqui você poderá conhecer um pouco mais sobre minha trajetória,
          interesses na área de Tecnologia e objetivos como profissional em
          Ciência da Computação e Quality Assurance.
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
