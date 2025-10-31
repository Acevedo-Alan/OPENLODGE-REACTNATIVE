import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

const Card = ({ children, style }) => (
  <View style={[styles.card, style]}>{children}</View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 15,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
});

export default Card;