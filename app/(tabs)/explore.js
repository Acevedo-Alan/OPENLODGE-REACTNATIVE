import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ActivityCard from '../../components/ActivityCard';
import Card from '../../components/Card';
import { COLORS, FONT_SIZES, Icons } from '../../constants';
import { commonStyles } from '../../styles/commonStyles';

export default function ExplorarScreen() {
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
      image: Icons.activity,
    },
    {
      title: 'Tour Gastronómico',
      description: 'Prueba la cocina local',
      price: '$85',
      image: Icons.food,
    },
  ];

  const places = [
    { name: 'Playa Paraíso', distance: '500m', icon: Icons.beach },
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
          <View style={styles.placeIcon}>
            {place.icon && <place.icon size={32} color={COLORS.primary} />}
          </View>
          <View style={styles.placeContent}>
            <Text style={styles.placeName}>{place.name}</Text>
            <View style={styles.distanceContainer}>
              <Icons.location size={16} color={COLORS.textSecondary} />
              <Text style={styles.placeDistance}>{place.distance}</Text>
            </View>
          </View>
          <Icons.arrowRight size={20} color={COLORS.textLight} />
        </Card>
      ))}
    </ScrollView>
  );
}

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
    width: 32,
    height: 32,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
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
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  placeDistance: {
    fontSize: FONT_SIZES.regular,
    color: COLORS.textSecondary,
  },
});