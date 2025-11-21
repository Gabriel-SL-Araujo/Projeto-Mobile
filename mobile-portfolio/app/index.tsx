import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/111746992?v=4" }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Gabriel Araújo</Text>
      <Text style={styles.role}>Desenvolvedor Mobile • React Native + Expo</Text>

      <Text style={styles.sectionTitle}>Sobre Mim</Text>
      <Text style={styles.paragraph}>
        Estudante de Ciência da Computação, apaixonado por desenvolvimento mobile, testes automatizados e criação de soluções eficientes. Atualmente trabalhando com React Native, Expo, Java, Python e boas práticas de software.
      </Text>

      <Text style={styles.sectionTitle}>Navegação</Text>
      <Text style={styles.paragraph}>Use o menu superior para acessar:</Text>

      <View style={styles.list}>
        <Text style={styles.listItem}>• Sobre</Text>
        <Text style={styles.listItem}>• Experiência Acadêmica</Text>
        <Text style={styles.listItem}>• Experiência Profissional</Text>
        <Text style={styles.listItem}>• Projetos</Text>
        <Text style={styles.listItem}>• Jogo</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#0f172a",
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#e2e8f0",
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: "#94a3b8",
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    color: "#f1f5f9",
    marginTop: 20,
    marginBottom: 8,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  paragraph: {
    fontSize: 15,
    color: "#cbd5e1",
    lineHeight: 22,
    marginBottom: 10,
  },
  list: {
    alignSelf: "flex-start",
    marginTop: 10,
  },
  listItem: {
    fontSize: 16,
    color: "#cbd5e1",
    marginVertical: 4,
  },
});
