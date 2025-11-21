import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";

export default function ExperienciaAcademicaScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.title}>Experiência Acadêmica</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formação</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Bacharelado em Ciência da Computação
            </Text>
            <Text style={styles.cardSubtitle}>
              Universidade Católica de Pernambuco (UNICAP)
            </Text>
            <Text style={styles.cardMeta}>Ago 2023 — Ago 2027 · Recife, PE</Text>

            <Text style={styles.paragraph}>
              Sou estudante de Ciência da Computação com foco em ciência de dados, inteligência artificial e 
              qualidade de software. Minha formação combina uma base sólida em matemática aplicada incluindo 
              cálculo, álgebra linear, estatística e métodos numéricos com estudos aprofundados em estruturas 
              de dados, organização de sistemas computacionais e engenharia de software.Atualmente, dedico-me 
              ao estudo técnico de algoritmos de aprendizado supervisionado e não supervisionado, com foco na 
              compreensão dos fundamentos estatísticos, critérios de generalização, técnicas de regularização,
              validação cruzada e métricas de avaliação. Além disso, investigo aspectos relacionados à 
              interpretabilidade de modelos, otimização de hiperparâmetros e integração de pipelines de 
              Machine Learning em ambientes controlados de desenvolvimento.No campo da engenharia de software,
              concentro-me na sistematização de práticas de testes automatizados, explorando abordagens de testes
              unitários, testes de integração, testes baseados em propriedade e estratégias de verificação contínua,
              com o objetivo de garantir a confiabilidade e a manutenibilidade de sistemas computacionais. Adoto 
              uma abordagem metodológica disciplinada e orientada por evidências, integrando leitura teórica, 
              experimentação prática e aplicação de boas práticas de engenharia. Busco contribuir para o avanço 
              da pesquisa e do desenvolvimento tecnológico por meio da construção de soluções inteligentes, 
              escaláveis e alinhadas com os princípios da ciência computacional.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Disciplinas Relevantes</Text>

          <View style={styles.subSection}>
            <Text style={styles.subSectionTitle}>1º ao 4º Período</Text>

            <View style={styles.list}>
              <Text style={styles.listItem}>
                • Elementos da Diferenciação Computacional
              </Text>
              <Text style={styles.listItem}>
                • Fundamentos da Programação
              </Text>
              <Text style={styles.listItem}>
                • Fundamentos de Hardware
              </Text>
              <Text style={styles.listItem}>
                • Humanidade e Transcendência
              </Text>
              <Text style={styles.listItem}>
                • Introdução à Ciência da Computação
              </Text>
              <Text style={styles.listItem}>
                • Lógica Matemática Aplicada à Computação
              </Text>

              <Text style={styles.listItem}>
                • Álgebra Linear Computacional
              </Text>
              <Text style={styles.listItem}>
                • Computação, Sociedade e Sustentabilidade
              </Text>
              <Text style={styles.listItem}>
                • Elementos da Integralização Computacional
              </Text>
              <Text style={styles.listItem}>
                • Processos e Requisitos de Software
              </Text>
              <Text style={styles.listItem}>
                • Programação Estruturada
              </Text>
              <Text style={styles.listItem}>
                • Sistemas Digitais
              </Text>

              <Text style={styles.listItem}>
                • Construção de Compiladores
              </Text>
              <Text style={styles.listItem}>
                • Design de Interface e Usabilidade
              </Text>
              <Text style={styles.listItem}>
                • Estrutura de Dados Lineares
              </Text>
              <Text style={styles.listItem}>
                • Infraestrutura de Software
              </Text>
              <Text style={styles.listItem}>
                • Métodos Numéricos
              </Text>
              <Text style={styles.listItem}>
                • Programação Orientada a Objetos
              </Text>

              <Text style={styles.listItem}>
                • Análise e Projeto de Software
              </Text>
              <Text style={styles.listItem}>
                • Árvores e Ordenação de Dados
              </Text>
              <Text style={styles.listItem}>
                • Estatística e Probabilidade para Computação
              </Text>
              <Text style={styles.listItem}>
                • Projeto de Banco de Dados
              </Text>
              <Text style={styles.listItem}>
                • Robótica Inclusiva
              </Text>
            </View>
          </View>

          <View style={styles.subSection}>
            <Text style={styles.subSectionTitle}>5º Período (atual)</Text>

            <View style={styles.list}>
              <Text style={styles.listItem}>• Análise de Algoritmos</Text>
              <Text style={styles.listItem}>• Ciência das Redes</Text>
              <Text style={styles.listItem}>• Inteligência Artificial</Text>
              <Text style={styles.listItem}>
                • Programação Web e Mobile
              </Text>
              <Text style={styles.listItem}>• Projeto Integrador</Text>
              <Text style={styles.listItem}>• Redes de Computadores</Text>
              <Text style={styles.listItem}>
                • Testes e Qualidade de Software
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Monitorias</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Monitoria em Cálculo I, II e III</Text>
            <Text style={styles.cardSubtitle}>UNICAP</Text>
            <Text style={styles.cardMeta}>Emitido em Ago 2024</Text>

            <Text style={styles.paragraph}>
              Atuei como monitor auxiliando outros estudantes em atividades,
              forneci suporte na resolução de exercícios e reforço teórico nas disciplinas 
              de Cálculo I, II e III. Essa experiência fortaleceu minha base
              matemática e também desenvolveu habilidades de comunicação,
              didática e organização de conteúdo técnico.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certificações Acadêmicas</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              First Certificate in English (FCE) – Cambridge
            </Text>
            <Text style={styles.cardSubtitle}>Nível B2 – Inglês</Text>

            <Text style={styles.paragraph}>
              Certificação internacional que comprova proficiência em inglês em
              contexto acadêmico e profissional, garantindo leitura, escrita,
              audição e fala em nível intermediário-avançado.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objetivos Acadêmicos</Text>

          <View style={styles.list}>
            <Text style={styles.listItem}>
              • Fortalecer conhecimento em Linguagens de Programação como Python e Java.
            </Text>
            <Text style={styles.listItem}>
              • Aprofundar técnicas de Testes de Software e Automação.
            </Text>
            <Text style={styles.listItem}>
              • Desenvolver competências em Data Science e Machine Learning.
            </Text>
            <Text style={styles.listItem}>
              • Evoluir em pesquisas e experimentação em IA e computação aplicada.
            </Text>
            <Text style={styles.listItem}>
              • Aperfeiçoar inglês técnico e leitura de artigos científicos.
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
    marginBottom: 6,
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
  },
  subSection: {
    marginTop: 10,
  },
  subSectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#cbd5e1",
    marginBottom: 4,
  },
});
