import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BookingCard from '../../components/BookingCard';
import Card from '../../components/Card';
import GradientButton from '../../components/GradientButton';
import { COLORS, FONT_SIZES, Icons } from '../../constants';
import { commonStyles } from '../../styles/commonStyles';

export default function ReservasScreen() {
  const upcomingBookings = [
    {
      room: 'Suite Deluxe',
      dates: '15 Nov - 18 Nov 2025',
      status: 'Confirmada',
      statusColor: COLORS.primary,
      location: 'Hotel Paradise, Cancún',
    },
    {
      room: 'Habitación Estándar',
      dates: '22 Dic - 25 Dic 2025',
      status: 'Pendiente',
      statusColor: COLORS.warning,
      location: 'Hotel Paradise, Cancún',
    },
  ];

  const history = [
    { room: 'Suite Junior', dates: '10 Ago - 14 Ago 2025', rating: 5 },
    { room: 'Habitación Doble', dates: '5 Jun - 8 Jun 2025', rating: 4 },
  ];

  return (
    <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerTitle}>Mis Reservas</Text>
      </View>

      <GradientButton title="Nueva Reserva +" style={styles.newButton} />

      <Text style={commonStyles.sectionTitle}>Próximas Reservas</Text>
      
      {upcomingBookings.map((booking, index) => (
        <BookingCard
          key={index}
          room={booking.room}
          dates={booking.dates}
          status={booking.status}
          statusColor={booking.statusColor}
          location={booking.location}
        />
      ))}

      <Text style={commonStyles.sectionTitle}>Historial</Text>
      
      {history.map((booking, index) => (
        <Card key={index} style={styles.historyCard}>
          <Text style={styles.historyRoom}>{booking.room}</Text>
          <Text style={styles.historyDates}>{booking.dates}</Text>
          <View style={styles.ratingContainer}>
            {[...Array(booking.rating)].map((_, i) => (
              <Icons.star key={i} size={16} color={COLORS.primary} style={styles.ratingStar} />
            ))}
          </View>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 90,
  },
  newButton: {
    margin: 20,
  },
  historyCard: {
    marginBottom: 12,
  },
  historyRoom: {
    fontSize: FONT_SIZES.large,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  historyDates: {
    fontSize: FONT_SIZES.regular,
    color: COLORS.textSecondary,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  ratingStar: {
    marginRight: 2,
  },
});
