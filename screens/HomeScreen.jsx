import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import Card from '../components/Card';
import GradientButton from '../components/GradientButton';
import ServiceCard from '../components/ServiceCard';
import PromoCard from '../components/PromoCard';
import { COLORS, FONT_SIZES, FONTS } from '../constants';

const HomeScreen = () => {
  const services = [
    { name: 'Spa & Wellness', icon: '💆' },
    { name: 'Restaurante', icon: '🍽️' },
    { name: 'Piscina', icon: '🏊' },
    { name: 'Gimnasio', icon: '💪' },
  ];

  const promos = [
    { title: '20% OFF - Reserva Anticipada', desc: 'Reserva con 30 días de anticipación' },
    { title: 'Desayuno Incluido', desc: 'En reservas de 3 noches o más' },
  ];

  return (
    <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerTitle}>Bienvenido</Text>
        <Text style={commonStyles.headerSubtitle}>Hotel Paradise</Text>
      </View>

      <Card style={styles.featuredCard}>
        <View style={styles.featuredBadge}>
          <Text style={styles.featuredBadgeText}>DESTACADO</Text>
        </View>
        <Text style={styles.featuredTitle}>Suite Premium con Vista al Mar</Text>
        <Text style={styles.featuredPrice}>$299 / noche</Text>
        <Text style={styles.featuredDescription}>
          Disfruta de nuestra suite más exclusiva con balcón privado y jacuzzi
        </Text>
        <GradientButton title="Reservar Ahora" style={{ marginTop: 15 }} />
      </Card>

      <Text style={commonStyles.sectionTitle}>Servicios Populares</Text>
      
      <View style={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard key={index} name={service.name} icon={service.icon} />
        ))}
      </View>

      <Text style={commonStyles.sectionTitle}>Promociones Especiales</Text>
      
      {promos.map((promo, index) => (
        <PromoCard key={index} title={promo.title} description={promo.desc} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 90,
  },
  featuredCard: {
    position: 'relative',
  },
  featuredBadge: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  featuredBadgeText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.small,
    fontWeight: '700',
    letterSpacing: 1,
  },
  featuredTitle: {
    fontSize: FONT_SIZES.title,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 8,
    fontFamily: FONTS.montserrat,
  },
  featuredPrice: {
    fontSize: FONT_SIZES.xlarge,
    fontWeight: '600',
    color: COLORS.primary,
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textSecondary,
    lineHeight: 20,
    fontFamily: FONTS.roboto,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  },
});

export default HomeScreen;