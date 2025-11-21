import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";

export default function ExperienciaProfissionalScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Título */}
        <Text style={styles.title}>Experiência Profissional</Text>

        {/* Papel principal */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Atuação em Testes de Software</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Software Tester · Projeto CIn/Motorola</Text>
            <Text style={styles.cardSubtitle}>Centro de Informática (CIn) · UFPE</Text>
            <Text style={styles.cardMeta}>2024 — atual · Recife, PE</Text>

            <Text style={styles.paragraph}>
              Atuo como Software Tester em um time de qualidade focado em
              garantir a estabilidade de produtos através de testes de
              regressão, automação e análise sistemática de defeitos. Trabalho
              em conjunto com desenvolvedores e outros analistas de teste para
              validar funcionalidades, identificar problemas e apoiar decisões
              de release.
            </Text>

            <Text style={styles.subSectionTitle}>Principais atividades</Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                • Criação, execução e manutenção de casos de teste para cenários
                  funcionais e de regressão.
              </Text>
              <Text style={styles.listItem}>
                • Apoio em testes de regressão automatizados, utilizando Python
                  e ferramentas internas do projeto.
              </Text>
              <Text style={styles.listItem}>
                • Análise de falhas, leitura de logs, abertura e acompanhamento
                  de tickets de defeito.
              </Text>
              <Text style={styles.listItem}>
                • Participação em revisões de requisito e alinhamento com o time
                  de desenvolvimento para esclarecer comportamento esperado.
              </Text>
              <Text style={styles.listItem}>
                • Contribuição em rotinas de integração contínua (CI) ligadas à
                  validação de qualidade antes de novas entregas.
              </Text>
            </View>

            <Text style={styles.subSectionTitle}>Tecnologias e ferramentas envolvidas</Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>• Python para automação de testes e scripts de apoio</Text>
              <Text style={styles.listItem}>• Criação de Casos de Teste utilizando ferramentas de Metologias Ágeis como Scrum e Kanban</Text>
              <Text style={styles.listItem}>• SQL para consultas e análise de dados em bases de teste</Text>
              <Text style={styles.listItem}>• Aplicação de conhecimentos de engenharia de software para identificação e reporte de bugs</Text>
              <Text style={styles.listItem}>• Git para controle de versão</Text>
              <Text style={styles.listItem}>• Ferramentas de CI/CD e gestão de defeitos</Text>
            </View>
          </View>
        </View>

        {/* Habilidades desenvolvidas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades Desenvolvidas</Text>

          <View style={styles.list}>
            <Text style={styles.listItem}>
              • Visão crítica de qualidade de software, cobrindo desde casos de
                teste manuais até automação.
            </Text>
            <Text style={styles.listItem}>
              • Organização e documentação de cenários de teste e evidências de
                execução.
            </Text>
            <Text style={styles.listItem}>
              • Trabalho em equipe com desenvolvedores, analistas de teste e
                outros times técnicos.
            </Text>
            <Text style={styles.listItem}>
              • Comunicação clara de problemas, riscos e impactos de defeitos.
            </Text>
            <Text style={styles.listItem}>
              • Rotina de estudo contínuo em testes automatizados, boas práticas
                de QA, Python, Git e ferramentas de apoio.
            </Text>
          </View>
        </View>

        {/* Objetivos Profissionais */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objetivos Profissionais</Text>

          <Text style={styles.paragraph}>
            Profissionalmente, almejo expandir minhas habilidades de comunicação e meu desenvolvimento interpessoal com os demais membros da equipe, assim como busco continuar evoluindo como Software Tester e
            desenvolvedor, unindo:
          </Text>

          <View style={styles.list}>
            <Text style={styles.listItem}>
              • Domínio mais profundo em automação de testes (Python, Java e
                ferramentas de QA).
            </Text>
            <Text style={styles.listItem}>
              • Melhoria contínua em engenharia de software e boas práticas de
                código limpo.
            </Text>
            <Text style={styles.listItem}>
              • Aprofundamento em Data Science e Machine Learning aplicados à
                análise de qualidade e métricas.
            </Text>
            <Text style={styles.listItem}>
              • Atuação em times que valorizem qualidade, colaboração e
                aprendizado constante.
            </Text>
          </View>
        </View>

        <View style={{ height: 32 }} />
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
    paddingVertical: 28,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#f9fafb",
    marginBottom: 12,
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#e5e7eb",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    color: "#e5e7eb",
    lineHeight: 20,
    marginBottom: 6,
  },
  card: {
    marginTop: 4,
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#020617",
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#f9fafb",
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#cbd5e1",
  },
  cardMeta: {
    fontSize: 12,
    color: "#9ca3af",
    marginBottom: 8,
  },
  list: {
    marginTop: 4,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 14,
    color: "#cbd5e1",
    lineHeight: 20,
    marginBottom: 2,
  },
  subSectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#cbd5e1",
    marginTop: 10,
    marginBottom: 4,
  },
});
