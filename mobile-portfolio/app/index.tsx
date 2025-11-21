import { Link } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.welcome}>Bem-vindo!</Text>

          <Text style={styles.title}>Gabriel de Souza Leão Araújo</Text>

          <Text style={styles.subtitle}>
            Software Tester e estudante de Ciência da Computação (UNICAP),
            interessado em qualidade de software, automação, Data Science e
            desenvolvimento mobile com React Native + Expo.
          </Text>
        </View>

        <View style={styles.photoWrapper}>
          <Image
            source={require("../assets/profile.jpeg")}
            style={styles.photo}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Navegação</Text>

          <Text style={styles.sectionDescription}>
            Acesse informações sobre minha trajetória acadêmica, experiência
            profissional, projetos desenvolvidos e experimente um jogo da forca
            criado especialmente para este aplicativo.
          </Text>

          <View style={styles.buttonsContainer}>
            <Link href="/sobre" asChild>
              <Pressable style={styles.buttonPrimary}>
                <Text style={styles.buttonPrimaryText}>Sobre</Text>
              </Pressable>
            </Link>

            <Link href="/experiencia-academica" asChild>
              <Pressable style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>
                  Experiência Acadêmica
                </Text>
              </Pressable>
            </Link>

            <Link href="/experiencia-profissional" asChild>
              <Pressable style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>
                  Experiência Profissional
                </Text>
              </Pressable>
            </Link>

            <Link href="/projetos" asChild>
              <Pressable style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>
                  Projetos Desenvolvidos
                </Text>
              </Pressable>
            </Link>

            <Link href="/jogo" asChild>
              <Pressable style={styles.buttonGame}>
                <Text style={styles.buttonGameText}>Jogo da Forca</Text>
              </Pressable>
            </Link>
          </View>
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
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  header: {
    marginBottom: 28,
  },
  welcome: {
    fontSize: 18,
    color: "#22c55e",
    fontWeight: "600",
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#f9fafb",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: "#9ca3af",
  },

  photoWrapper: {
    alignItems: "center",
    marginVertical: 20,
  },
  photo: {
    width: 160,
    height: 160,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: "#22c55e",
  },

  section: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#e5e7eb",
    marginBottom: 6,
  },
  sectionDescription: {
    fontSize: 14,
    color: "#9ca3af",
    marginBottom: 16,
  },
  buttonsContainer: {
    gap: 12,
  },

  buttonPrimary: {
    paddingVertical: 14,
    borderRadius: 999,
    backgroundColor: "#22c55e",
    alignItems: "center",
  },
  buttonPrimaryText: {
    color: "#022c22",
    fontWeight: "700",
    fontSize: 15,
  },

  buttonSecondary: {
    paddingVertical: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#334155",
    alignItems: "center",
  },
  buttonSecondaryText: {
    color: "#e5e7eb",
    fontWeight: "500",
    fontSize: 15,
  },

  buttonGame: {
    paddingVertical: 14,
    borderRadius: 999,
    backgroundColor: "#1d4ed8",
    alignItems: "center",
    marginTop: 4,
  },
  buttonGameText: {
    color: "#e5e7eb",
    fontWeight: "700",
    fontSize: 15,
  },
});
