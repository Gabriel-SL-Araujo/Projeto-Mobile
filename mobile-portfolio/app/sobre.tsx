import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";

export default function SobreScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.title}>Tecnologias Utilizadas</Text>

        <Text style={styles.description}>
          Esta aplicação foi desenvolvida em React Native utilizando o ecossistema Expo e
          diversas ferramentas e módulos modernos. Abaixo está uma lista completa de todas
          as tecnologias, bibliotecas e conceitos utilizados para construir este App.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📱 Base do Aplicativo</Text>
          <Text style={styles.item}>• React Native — Framework principal para desenvolvimento mobile</Text>
          <Text style={styles.item}>• Expo — Gerenciador e bundler da aplicação</Text>
          <Text style={styles.item}>• Expo Router — Sistema de rotas utilizado para navegação entre telas</Text>
          <Text style={styles.item}>• TypeScript — Linguagem utilizada no projeto para tipagem estática</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎨 Interface e Estilização</Text>
          <Text style={styles.item}>• React Native StyleSheet — estilização dos componentes</Text>
          <Text style={styles.item}>• Componentes nativos: View, Text, Image, ScrollView, Pressable</Text>
          <Text style={styles.item}>• Tema escuro customizado (Dark UI)</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🧠 Hooks e Lógica</Text>
          <Text style={styles.item}>• useState — gerenciamento de estados</Text>
          <Text style={styles.item}>• useEffect — monitoramento de ciclos e inicialização de dados</Text>
          <Text style={styles.item}>• useMemo — otimização e cálculos derivados</Text>
          <Text style={styles.item}>• Funções puras para lógica da aplicação</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🕹️ Jogo da Forca (Implementado no App)</Text>
          <Text style={styles.item}>• Lógica própria adaptada do projeto web</Text>
          <Text style={styles.item}>• Teclado virtual mobile construído manualmente</Text>
          <Text style={styles.item}>• Desenho customizado da forca utilizando Views posicionadas</Text>
          <Text style={styles.item}>• Estados: vitória, derrota, tentativas e letras utilizadas</Text>
          <Text style={styles.item}>• Navegação integrada ao Expo Router (sem links externos)</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📂 Organização do Projeto</Text>
          <Text style={styles.item}>• Estrutura baseada no padrão do Expo Router</Text>
          <Text style={styles.item}>• Diretório /app contendo todas as telas do aplicativo</Text>
          <Text style={styles.item}>• Arquivo _layout.tsx controlando a pilha de navegação</Text>
          <Text style={styles.item}>• Telas implementadas: Home, Sobre, Experiência Acadêmica, Experiência Profissional, Projetos, Jogo</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🔧 Ferramentas Externas</Text>
          <Text style={styles.item}>• Node.js — Ambiente para executar o desenvolvimento</Text>
          <Text style={styles.item}>• NPM — Gerenciador de dependências</Text>
          <Text style={styles.item}>• GitHub Codespaces — Ambiente de desenvolvimento online</Text>
          <Text style={styles.item}>• GitHub — Repositório remoto para o projeto</Text>
          <Text style={styles.item}>• Expo Go — Para testar a aplicação no celular</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🛠️ Módulos Importantes do Expo</Text>
          <Text style={styles.item}>• expo-router — Sistema de Rotas</Text>
          <Text style={styles.item}>• expo-status-bar (opcional)</Text>
          <Text style={styles.item}>• expo-splash-screen (nativo do template)</Text>
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
    fontSize: 28,
    fontWeight: "800",
    color: "#f1f5f9",
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    color: "#cbd5e1",
    fontSize: 15,
    marginBottom: 20,
    lineHeight: 22,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#38bdf8",
    marginBottom: 8,
  },
  item: {
    fontSize: 15,
    color: "#e2e8f0",
    marginBottom: 6,
    lineHeight: 22,
  },
});
