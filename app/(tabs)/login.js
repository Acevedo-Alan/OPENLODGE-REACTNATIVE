import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import GradientButton from "../../components/GradientButton";
import { COLORS, FONT_SIZES } from "../../constants";
import { useAuth } from "../../hooks/userAuth";

export default function LoginScreen() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }

    try {
      setLoading(true);
      const user = await login(username, password);

      // Redirigir según el rol
      if (user.rol === "ANFITRION") {
        router.replace("/anfitrion/dashboard");
      } else {
        router.replace("/(tabs)"); // Tabs para huéspedes
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="username"
        value={username}
        onChangeText={setusername}
        keyboardType="username-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <GradientButton
        title={loading ? "Cargando..." : "Entrar"}
        onPress={handleLogin}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: FONT_SIZES.hero,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    fontSize: FONT_SIZES.large,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  button: {
    marginTop: 10,
  },
});
