import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import Card from '../components/Card';
import ActivityCard from '../components/ActivityCard';
import { Icons } from '../constants/icons';
import { COLORS, FONT_SIZES } from '../constants';

const ExplorarScreen = () => {
  const activities = [
    {
      title: 'Tour de Snorkel',
      description: 'Explora el arrecife de coral',
      price: '$65',
      image: Icons.beach,
    },
    {
      title: 'Clase de Yoga al Amanecer',
      description: 'Relájate frente al mar',
      price: '$25',
      image: Icons.yoga,
    },
    {
      title: 'Tour Gastronómico',
      description: 'Prueba la cocina local',
      price: '$85',
      image: Icons.food,
    },
  ];

  const places = [
    { name: 'Playa Paraíso', distance: '500m', icon: Icons.island },
    { name: 'Centro Comercial', distance: '2km', icon: Icons.shopping },
    { name: 'Parque Nacional', distance: '5km', icon: Icons.nature },
  ];

  return (
    <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerTitle}>Explorar</Text>
        <Text style={commonStyles.headerSubtitle}>Descubre experiencias únicas</Text>
      </View>

      <Text style={commonStyles.sectionTitle}>Actividades Destacadas</Text>
      
      {activities.map((activity, index) => (
        <ActivityCard
          key={index}
          title={activity.title}
          description={activity.description}
          price={activity.price}
          image={activity.image}
        />
      ))}

      <Text style={commonStyles.sectionTitle}>Lugares Cercanos</Text>
      
      {places.map((place, index) => (
        <Card key={index} style={styles.placeCard}>
          <Text style={styles.placeIcon}>{place.icon}</Text>
          <View style={styles.placeContent}>
            <Text style={styles.placeName}>{place.name}</Text>
            <Text style={styles.placeDistance}>{Icons.location} {place.distance}</Text>
          </View>
          <Text style={styles.placeArrow}>{Icons.arrow}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 90,
  },
  placeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  placeIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  placeContent: {
    flex: 1,
  },
  placeName: {
    fontSize: FONT_SIZES.large,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  placeDistance: {
    fontSize: FONT_SIZES.regular,
    color: COLORS.textSecondary,
  },
  placeArrow: {
    fontSize: 20,
    color: COLORS.textLight,
  },
});

export default ExplorarScreen;
