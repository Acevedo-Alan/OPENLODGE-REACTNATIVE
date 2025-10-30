import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Card from './Card';
import { COLORS, FONT_SIZES } from '../constants';

const ServiceCard = ({ name, icon }) => (
  <Card style={styles.serviceCard}>
    <Text style={styles.serviceIcon}>{icon}</Text>
    <Text style={styles.serviceName}>{name}</Text>
  </Card>
);

const styles = StyleSheet.create({
  serviceCard: {
    width: '45%',
    margin: 8,
    alignItems: 'center',
    padding: 20,
  },
  serviceIcon: {
    fontSize: 40,
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