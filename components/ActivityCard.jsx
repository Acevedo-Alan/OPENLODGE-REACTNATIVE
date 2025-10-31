import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT_SIZES } from '../constants';
import Card from './Card';

const ActivityCard = ({ title, description, price, image: IconComponent }) => (
  <Card style={styles.activityCard}>
    <View style={styles.activityImage}>
      <IconComponent size={60} color={COLORS.primary} />
    </View>
    <View style={styles.activityContent}>
      <Text style={styles.activityTitle}>{title}</Text>
      <Text style={styles.activityDescription}>{description}</Text>
      <View style={styles.activityFooter}>
        <Text style={styles.activityPrice}>{price}</Text>
        <TouchableOpacity style={styles.activityButton}>
          <Text style={styles.activityButtonText}>Reservar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  activityCard: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  activityImage: {
    width: 60,
    height: 60,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  activityDescription: {
    fontSize: FONT_SIZES.regular,
    color: COLORS.textSecondary,
    marginBottom: 12,
  },
  activityFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityPrice: {
    fontSize: FONT_SIZES.xlarge,
    fontWeight: '700',
    color: COLORS.primary,
  },
  activityButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  activityButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.regular,
    fontWeight: '600',
  },
});

export default ActivityCard;