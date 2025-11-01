import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import FormInput from '../../components/FormInput';
import GradientButton from '../../components/GradientButton';
import { authStyles as styles } from '../../styles/auth.styles';

export default function RegisterScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'El nombre es requerido';
    }

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

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirma tu contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Replace with your API endpoint
      const response = await fetch('https://api.openlodge.com/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Handle successful registration
        // You might want to automatically log the user in here
        router.replace('/(tabs)');
      } else {
        setErrors({
          auth: data.message || 'Error al crear la cuenta',
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
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>OpenLodge</Text>
        <Text style={styles.title}>Crear Cuenta</Text>
        <Text style={styles.subtitle}>
          Únete a OpenLodge y descubre experiencias únicas
        </Text>
      </View>

      {errors.auth && (
        <Text style={styles.errorText}>{errors.auth}</Text>
      )}

      <FormInput
        label="Nombre completo"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
        placeholder="John Doe"
        autoCapitalize="words"
        error={errors.name}
      />

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
        placeholder="Crea una contraseña"
        isPassword
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
        error={errors.password}
      />

      <FormInput
        label="Confirmar contraseña"
        value={formData.confirmPassword}
        onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
        placeholder="Confirma tu contraseña"
        isPassword
        showPassword={showConfirmPassword}
        onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
        error={errors.confirmPassword}
      />

      <GradientButton
        title="Crear Cuenta"
        onPress={handleRegister}
        loading={isLoading}
        style={{ marginTop: 20 }}
      />

      <View style={styles.switchAuthContainer}>
        <Text style={styles.switchAuthText}>¿Ya tienes una cuenta?</Text>
        <Link href="/auth" asChild>
          <Pressable>
            <Text style={styles.switchAuthLink}>Inicia sesión</Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}