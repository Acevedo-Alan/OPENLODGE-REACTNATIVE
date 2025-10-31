import { Tabs } from 'expo-router';
import { COLORS, Icons } from '../../constants';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textLight,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 1,
          borderTopColor: COLORS.border,
          paddingBottom: 8,
          paddingTop: 8,
          height: 70,
          shadowColor: COLORS.shadow,
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 10,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <span style={{ fontSize: 24 }}>{Icons.home}</span>,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color }) => <span style={{ fontSize: 24 }}>{Icons.explore}</span>,
        }}
      />
      <Tabs.Screen
        name="reservas"
        options={{
          title: 'Reservas',
          tabBarIcon: ({ color }) => <span style={{ fontSize: 24 }}>{Icons.calendar}</span>,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <span style={{ fontSize: 24 }}>{Icons.profile}</span>,
        }}
      />
    </Tabs>
  );
}
