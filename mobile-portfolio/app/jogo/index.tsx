import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function JogoForcaScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Jogo da Forca</Text>
        <Text style={styles.text}>
          Em breve: um jogo da forca desenvolvido em React Native + Expo,
          totalmente integrado a este aplicativo de portfólio.
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
