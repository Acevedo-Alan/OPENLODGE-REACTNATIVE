import { Stack } from 'expo-router';
import { COLORS } from '../../constants';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerShadowVisible: false,
        headerBackTitle: 'Atrás',
        headerTintColor: COLORS.primary,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Iniciar Sesión',
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerTitle: 'Crear Cuenta',
        }}
      />
    </Stack>
  );
}