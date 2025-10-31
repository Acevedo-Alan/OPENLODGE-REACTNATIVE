import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../../components/Card';
import GradientButton from '../../components/GradientButton';
import { COLORS, FONT_SIZES, FONTS, Icons } from '../../constants';
import { commonStyles } from '../../styles/commonStyles';

export default function ProfileScreen() {
  const menuItems = [
    { title: 'Información Personal', icon: Icons.profile },
    { title: 'Métodos de Pago', icon: Icons.card },
    { title: 'Preferencias', icon: Icons.settings },
    { title: 'Notificaciones', icon: Icons.notification },
  ];

  return (
    <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>john.doe@email.com</Text>
      </View>

      <Card style={styles.statsCard}>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Reservas</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Reseñas</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>VIP</Text>
            <Text style={styles.statLabel}>Nivel</Text>
          </View>
        </View>
      </Card>

      <Text style={commonStyles.sectionTitle}>Mi Cuenta</Text>
      
      {menuItems.map((item, index) => (
        <Card key={index} style={styles.menuItem}>
          <Text style={styles.menuIcon}>{item.icon}</Text>
          <Text style={styles.menuTitle}>{item.title}</Text>
          <Text style={styles.menuArrow}>{Icons.arrow}</Text>
        </Card>
      ))}

      <GradientButton title="Cerrar Sesión" style={styles.logoutButton} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 90,
  },
  profileHeader: {
    alignItems: 'center',
    padding: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: '700',
    color: COLORS.white,
  },
  profileName: {
    fontSize: FONT_SIZES.header,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 5,
    fontFamily: FONTS.montserrat,
  },
  profileEmail: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textSecondary,
  },
  statsCard: {
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: FONT_SIZES.header,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: FONT_SIZES.regular,
    color: COLORS.textSecondary,
  },
  statDivider: {
    width: 1,
    backgroundColor: COLORS.border,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  menuTitle: {
    flex: 1,
    fontSize: FONT_SIZES.large,
    fontWeight: '500',
    color: COLORS.textPrimary,
  },
  menuArrow: {
    fontSize: 18,
    color: COLORS.textLight,
  },
  logoutButton: {
    margin: 20,
    marginTop: 30,
  },
});