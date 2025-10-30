import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';
import { Icons } from '../constants/icons';
import { COLORS, FONT_SIZES } from '../constants';

const PromoCard = ({ title, description }) => (
  <Card style={styles.promoCard}>
    <View style={styles.promoContent}>
      <Text style={styles.promoTitle}>{title}</Text>
      <Text style={styles.promoDesc}>{description}</Text>
    </View>
    <Text style={styles.promoArrow}>{Icons.arrow}</Text>
  </Card>
);

const styles = StyleSheet.create({
  promoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  promoContent: {
    flex: 1,
  },
  promoTitle: {
    fontSize: FONT_SIZES.large,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  promoDesc: {
    fontSize: FONT_SIZES.regular,
    color: COLORS.textSecondary,
  },
  promoArrow: {
    fontSize: 20,
    color: COLORS.primary,
  },
});

export default PromoCard;