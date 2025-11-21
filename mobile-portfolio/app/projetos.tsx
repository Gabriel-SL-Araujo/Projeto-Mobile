import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";

export default function ProjetosScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Projetos Desenvolvidos</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Sistema Integrado de Gerenciamento Multissetorial (Nov 2024)
          </Text>
          <Text style={styles.cardTech}>Java • Git/GitHub • POO</Text>
          <Text style={styles.cardText}>
            Sistema em Java para gerenciar operações de clínicas médicas,
            restaurantes e eventos. Inclui cadastro de clientes, organização
            de informações e interface para usuários.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Projeto de Extensão — Ensino de Tecnologia (Mar 2024)
          </Text>
          <Text style={styles.cardTech}>
            Comunicação • Trabalho em Equipe • Design Básico
          </Text>
          <Text style={styles.cardText}>
            Atuação em um projeto voltado para ensinar habilidades tecnológicas,
            design e uso de nuvem a voluntários da comunidade Caranguejo Tabaiares,
            promovendo a biblioteca local e auxiliando voluntários.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Monitor de Cálculo — Ciência da Computação (Ago 2024)
          </Text>
          <Text style={styles.cardTech}>
            Python • Matemática Aplicada • Lógica de Programação
          </Text>
          <Text style={styles.cardText}>
            Auxílio a alunos do curso na resolução de dúvidas, compreensão de
            algoritmos matemáticos e exercícios de raciocínio lógico.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Aplicativo / Portfólio Mobile (2025 — Atual)
          </Text>
          <Text style={styles.cardTech}>
            React Native • Expo • Expo Router • TypeScript
          </Text>
          <Text style={styles.cardText}>
            Aplicativo criado como portfólio profissional, contendo apresentação
            pessoal, experiência acadêmica, profissional, projetos e um jogo
            completo da Forca integrado ao sistema de navegação.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#020617",
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#f1f5f9",
    marginBottom: 20,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#0f172a",
    padding: 18,
    borderRadius: 14,
    marginBottom: 20,
    borderColor: "#1e293b",
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#e2e8f0",
    marginBottom: 6,
  },
  cardTech: {
    fontSize: 13,
    color: "#38bdf8",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: "#94a3b8",
    lineHeight: 20,
  },
});
