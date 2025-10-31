import { StyleSheet, Text } from 'react-native';
import { COLORS, FONT_SIZES } from '../constants';
import Card from './Card';
import Icon from './Icon';

const ServiceCard = ({ name, icon }) => {
  const getIconName = (emoji) => {
    switch (emoji) {
      case '💆': return 'activity';
      case '🍽️': return 'food';
      case '🏊': return 'pool';
      case '💪': return 'activity';
      default: return 'activity';
    }
  };

  const iconName = getIconName(icon);

  return (
    <Card style={styles.serviceCard}>
      <Icon name={iconName} size={40} color={COLORS.primary} style={styles.serviceIcon} />
      <Text style={styles.serviceName}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  serviceCard: {
    alignItems: 'center',
    padding: 20,
  },
  serviceIcon: {
    marginBottom: 10,
  },
  serviceName: {
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
});

export default ServiceCard;