import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from './Card';
import { Icons } from '../constants/icons';
import { COLORS, FONT_SIZES } from '../constants';

const BookingCard = ({ room, dates, status, statusColor, location }) => (
  <Card style={styles.bookingCard}>
    <View style={styles.bookingHeader}>
      <Text style={styles.bookingRoom}>{room}</Text>
      <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </View>
    <Text style={styles.bookingDates}>{Icons.calendar} {dates}</Text>
    <Text style={styles.bookingLocation}>{Icons.location} {location}</Text>
    <View style={styles.bookingActions}>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Ver Detalles</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButtonSecondary}>
        <Text style={styles.actionButtonSecondaryText}>Modificar</Text>
      </TouchableOpacity>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  bookingCard: {
    marginBottom: 15,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  bookingRoom: {
    fontSize: FONT_SIZES.xlarge,
    fontWeight: '600',
    color: COLORS.textPrimary,
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  statusText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
  },
  bookingDates: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textSecondary,
    marginBottom: 6,
  },
  bookingLocation: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textSecondary,
    marginBottom: 15,
  },
  bookingActions: {
    flexDirection: 'row',
    gap: 10,
  },
  actionButton: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  actionButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
  },
  actionButtonSecondary: {
    flex: 1,
    backgroundColor: COLORS.background,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  actionButtonSecondaryText: {
    color: COLORS.textSecondary,
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
  },
});

export default BookingCard;