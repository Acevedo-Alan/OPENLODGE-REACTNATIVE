import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import FormInput from '../../components/FormInput';
import GradientButton from '../../components/GradientButton';
import { authStyles as styles } from '../../styles/auth.styles';

export default function LoginScreen() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Replace with your API endpoint
      const response = await fetch('https://api.openlodge.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Handle successful login
        // Store token, update auth context, etc.
        router.replace('/(tabs)');
      } else {
        setErrors({
          auth: data.message || 'Error al iniciar sesión',
        });
      }
    } catch (error) {
      setErrors({
        auth: 'Error de conexión. Intenta de nuevo.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>OpenLodge</Text>
        <Text style={styles.title}>¡Bienvenido de vuelta!</Text>
        <Text style={styles.subtitle}>
          Inicia sesión para continuar con tu experiencia OpenLodge
        </Text>
      </View>

      {errors.auth && (
        <Text style={styles.errorText}>{errors.auth}</Text>
      )}

      <FormInput
        label="Email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        placeholder="tu@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        error={errors.email}
      />

      <FormInput
        label="Contraseña"
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        placeholder="Ingresa tu contraseña"
        isPassword
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
        error={errors.password}
      />

      <Pressable onPress={() => router.push('/auth/forgot-password')}>
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      </Pressable>

      <GradientButton
        title="Iniciar Sesión"
        onPress={handleLogin}
        loading={isLoading}
      />

      <View style={styles.switchAuthContainer}>
        <Text style={styles.switchAuthText}>¿No tienes una cuenta?</Text>
        <Link href="/auth/register" asChild>
          <Pressable>
            <Text style={styles.switchAuthLink}>Regístrate</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}