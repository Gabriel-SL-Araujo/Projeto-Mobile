import { useRouter } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

const POKEMON_WORDS = [
  "ABSOL",
  "METAGROSS",
  "SALAMENCE",
  "TYRANITAR",
  "AGGRON",
  "SWAMPERT",
  "SCEPTILE",
  "BLAZIKEN",
  "MILOTIC",
  "LUXRAY",
  "ROSERADE",
  "TOGEKISS",
  "HONCHKROW",
  "WEAVILE",
  "FROSLASS",
  "DUSKNOIR",
  "BRONZONG",
  "GALLADE",
  "TALONFLAME",
  "NOIVERN",
  "GOODRA",
  "AVALUGG",
  "DELPHOX",
  "ZOROARK",
  "HAXORUS",
  "VOLCARONA",
  "DECIDUEYE",
  "INCINEROAR",
  "PRIMARINA",
  "TSAREENA",
  "RILLABOOM",
  "CORVIKNIGHT",
  "DRAGAPULT",
  "URSHIFU"
];

const MAX_ERRORS = 6;
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type Status = "playing" | "win" | "lose";

export default function JogoForcaScreen() {
  const router = useRouter();

  const [secret, setSecret] = useState<string>("");
  const [correct, setCorrect] = useState<string[]>([]);
  const [wrong, setWrong] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("playing");

  const start = () => {
    const word =
      POKEMON_WORDS[Math.floor(Math.random() * POKEMON_WORDS.length)];
    setSecret(word);
    setCorrect([]);
    setWrong([]);
    setStatus("playing");
  };

  useEffect(() => {
    start();
  }, []);

  const distinct = useMemo(
    () => Array.from(new Set(secret.split(""))),
    [secret]
  );

  useEffect(() => {
    if (!secret) return;
    if (distinct.every((l) => correct.includes(l))) {
      setStatus("win");
    } else if (wrong.length >= MAX_ERRORS) {
      setStatus("lose");
    }
  }, [correct, wrong, distinct, secret]);

  const tryLetter = (letter: string) => {
    if (status !== "playing") return;

    const L = letter.toUpperCase();
    if (correct.includes(L) || wrong.includes(L)) return;

    if (secret.includes(L)) {
      setCorrect((prev) => [...prev, L]);
    } else {
      setWrong((prev) => [...prev, L]);
    }
  };

  const errors = wrong.length;
  const chances = MAX_ERRORS - errors;

  const usedLetters = useMemo(
    () => wrong.concat(correct),
    [wrong, correct]
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Jogo da Forca — Pokémon Edition</Text>

        <HangmanDrawing errors={errors} />

        <View style={styles.statusBox}>
          <Text style={styles.statusText}>
            <Text style={styles.statusStrong}>Tentativas restantes: </Text>
            {chances}
          </Text>
          <Text style={styles.statusText}>
            <Text style={styles.statusStrong}>Letras usadas: </Text>
            {usedLetters.length > 0 ? usedLetters.join(" ") : "—"}
          </Text>
        </View>

        <View style={styles.wordBox} accessibilityLabel="Palavra secreta">
          {secret.split("").map((ch, index) => {
            const show = correct.includes(ch) || status !== "playing";
            return (
              <View key={`${ch}-${index}`} style={styles.letterSlot}>
                <Text style={[styles.letterText, show && styles.letterRevealed]}>
                  {show ? ch : "_"}
                </Text>
              </View>
            );
          })}
        </View>

        {status === "win" && (
          <View style={[styles.banner, styles.bannerWin]}>
            <Text style={styles.bannerEmoji}>🎉</Text>
            <Text style={styles.bannerText}>
              Parabéns! Você adivinhou{" "}
              <Text style={styles.bannerStrong}>{secret}</Text>.
            </Text>
          </View>
        )}

        {status === "lose" && (
          <View style={[styles.banner, styles.bannerLose]}>
            <Text style={styles.bannerEmoji}>😵</Text>
            <Text style={styles.bannerText}>
              Você perdeu. A palavra era{" "}
              <Text style={styles.bannerStrong}>{secret}</Text>.
            </Text>
          </View>
        )}

        <Keyboard
          onPress={tryLetter}
          disabled={status !== "playing"}
          correct={correct}
          wrong={wrong}
        />

        <View style={styles.buttonsRow}>
          <Pressable style={styles.primaryButton} onPress={start}>
            <Text style={styles.primaryButtonText}>Reiniciar</Text>
          </Pressable>

          <Pressable
            style={styles.secondaryButton}
            onPress={() => {
              if (router.canGoBack()) {
                router.back();
              } else {
                router.replace("/");
              }
            }}
          >
            <Text style={styles.secondaryButtonText}>Voltar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function HangmanDrawing({ errors }: { errors: number }) {
  const showHead = errors > 0;
  const showBody = errors > 1;
  const showLeftArm = errors > 2;
  const showRightArm = errors > 3;
  const showLeftLeg = errors > 4;
  const showRightLeg = errors > 5;

  return (
    <View style={styles.drawingWrapper}>
      <View style={styles.gallows}>
        <View style={styles.gallowsBase} />
        <View style={styles.gallowsPole} />
        <View style={styles.gallowsTop} />
        <View style={styles.gallowsRope} />

        {showHead && <View style={styles.head} />}
        {showBody && <View style={styles.body} />}
        {showLeftArm && <View style={[styles.arm, styles.leftArm]} />}
        {showRightArm && <View style={[styles.arm, styles.rightArm]} />}
        {showLeftLeg && <View style={[styles.leg, styles.leftLeg]} />}
        {showRightLeg && <View style={[styles.leg, styles.rightLeg]} />}
      </View>
    </View>
  );
}

function Keyboard({
  onPress,
  disabled,
  correct,
  wrong,
}: {
  onPress: (letter: string) => void;
  disabled: boolean;
  correct: string[];
  wrong: string[];
}) {
  return (
    <View style={styles.keyboard}>
      {LETTERS.map((letter) => {
        const isCorrect = correct.includes(letter);
        const isWrong = wrong.includes(letter);
        const isUsed = isCorrect || isWrong;

        return (
          <Pressable
            key={letter}
            style={({ pressed }) => [
              styles.key,
              isCorrect && styles.keyCorrect,
              isWrong && styles.keyWrong,
              isUsed && styles.keyUsed,
              pressed && !disabled && !isUsed && styles.keyPressed,
            ]}
            onPress={() => {
              if (!disabled && !isUsed) onPress(letter);
            }}
          >
            <Text style={styles.keyText}>{letter}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#020617",
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#f9fafb",
    marginBottom: 16,
    textAlign: "center",
  },

  drawingWrapper: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  gallows: {
    width: 200,
    height: 200,
    position: "relative",
  },
  gallowsBase: {
    position: "absolute",
    bottom: 0,
    left: 20,
    right: 20,
    height: 8,
    backgroundColor: "#1f2937",
    borderRadius: 4,
  },
  gallowsPole: {
    position: "absolute",
    bottom: 8,
    left: 40,
    width: 8,
    top: 20,
    backgroundColor: "#1f2937",
    borderRadius: 4,
  },
  gallowsTop: {
    position: "absolute",
    top: 20,
    left: 40,
    right: 60,
    height: 8,
    backgroundColor: "#1f2937",
    borderRadius: 4,
  },
  gallowsRope: {
    position: "absolute",
    top: 28,
    right: 60,
    width: 2,
    height: 28,
    backgroundColor: "#e5e7eb",
  },
  head: {
    position: "absolute",
    top: 50,
    right: 40,
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 3,
    borderColor: "#e5e7eb",
  },
  body: {
    position: "absolute",
    top: 82,
    right: 54,
    width: 4,
    height: 40,
    backgroundColor: "#e5e7eb",
  },
  arm: {
    position: "absolute",
    top: 92,
    width: 28,
    height: 4,
    backgroundColor: "#e5e7eb",
  },
  leftArm: {
    right: 56,
    transform: [{ rotateZ: "-25deg" }],
  },
  rightArm: {
    right: 34,
    transform: [{ rotateZ: "25deg" }],
  },
  leg: {
    position: "absolute",
    top: 120,
    width: 28,
    height: 4,
    backgroundColor: "#e5e7eb",
  },
  leftLeg: {
    right: 58,
    transform: [{ rotateZ: "25deg" }],
  },
  rightLeg: {
    right: 32,
    transform: [{ rotateZ: "-25deg" }],
  },

  statusBox: {
    width: "100%",
    backgroundColor: "#020617",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#1e293b",
    marginBottom: 16,
  },
  statusText: {
    fontSize: 14,
    color: "#e5e7eb",
    marginBottom: 4,
  },
  statusStrong: {
    fontWeight: "700",
    color: "#e5e7eb",
  },

  wordBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  letterSlot: {
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  letterText: {
    fontSize: 22,
    color: "#4b5563",
    fontWeight: "600",
  },
  letterRevealed: {
    color: "#e5e7eb",
  },

  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  key: {
    width: 32,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#1f2937",
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#020617",
  },
  keyText: {
    color: "#e5e7eb",
    fontWeight: "600",
  },
  keyCorrect: {
    backgroundColor: "#16a34a",
    borderColor: "#16a34a",
  },
  keyWrong: {
    backgroundColor: "#b91c1c",
    borderColor: "#b91c1c",
  },
  keyUsed: {
    opacity: 0.7,
  },
  keyPressed: {
    transform: [{ scale: 0.96 }],
  },

  banner: {
    width: "100%",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  bannerWin: {
    backgroundColor: "#022c22",
    borderWidth: 1,
    borderColor: "#16a34a",
  },
  bannerLose: {
    backgroundColor: "#1f2937",
    borderWidth: 1,
    borderColor: "#b91c1c",
  },
  bannerEmoji: {
    fontSize: 20,
  },
  bannerText: {
    flex: 1,
    color: "#e5e7eb",
    fontSize: 14,
  },
  bannerStrong: {
    fontWeight: "700",
  },

  buttonsRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 18,
    marginBottom: 8,
    width: "100%",
  },
  primaryButton: {
    flex: 1,
    backgroundColor: "#22c55e",
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#022c22",
    fontWeight: "700",
    fontSize: 15,
  },
  secondaryButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#334155",
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#e5e7eb",
    fontWeight: "500",
    fontSize: 15,
  },
});
