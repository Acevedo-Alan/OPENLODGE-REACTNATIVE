import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import "setimmediate";
import Card from "../../components/Card";
import GradientButton from "../../components/GradientButton";
import PromoCard from "../../components/PromoCard";
import ServiceCard from "../../components/ServiceCard";
import { COLORS, FONT_SIZES, FONTS, Icons } from "../../constants";
import { commonStyles } from "../../styles/commonStyles";

export default function HomeScreen() {
  // Datos del slider de imágenes
  const bannerImages = [
    { id: 1, uri: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" }, // Habitación moderna
  { id: 2, uri: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9" }, // Piscina elegante
  { id: 3, uri: "https://images.unsplash.com/photo-1564501049412-61c2a3083791" }, // Restaurante
  { id: 4, uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" }, // Playa o atardecer relajante
  { id: 5, uri: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" }, // Interior de hotel cálido
  { id: 6, uri: "https://images.unsplash.com/photo-1618773928121-c32242e63f39" }, // Vista nocturna con luces
  ];

  // Servicios populares
  const services = [
    { name: "Spa & Wellness", icon: Icons.activity },
    { name: "Restaurante", icon: Icons.food },
    { name: "Piscina", icon: Icons.pool },
    { name: "Gimnasio", icon: Icons.activity },
  ];

  // Promociones especiales
  const promos = [
    {
      title: "20% OFF - Reserva Anticipada",
      desc: "Reserva con 30 días de anticipación",
    },
    { title: "Desayuno Incluido", desc: "En reservas de 3 noches o más" },
  ];

  // Testimonios de huéspedes
  const testimonials = [
    {
      name: "María González",
      text: "Una experiencia increíble. El servicio y las instalaciones superaron todas nuestras expectativas.",
    },
    {
      name: "Carlos Ruiz",
      text: "El equilibrio perfecto entre lujo y naturaleza. Definitivamente volveremos.",
    },
    {
      name: "Ana Martínez",
      text: "La atención personalizada y la vista al mar desde la habitación fueron espectaculares.",
    },
  ];

  return (
    <ScrollView
      style={commonStyles.container}
      contentContainerStyle={styles.content}
    >
      {/* Header y Banner */}
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerTitle}>OpenLodge</Text>
        <Text style={commonStyles.headerSubtitle}>
          Vive la experiencia de confort y naturaleza en un solo lugar.
        </Text>
      </View>

      {/* Slider de imágenes */}
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          autoplayTimeout={4}
          showsPagination
          dotStyle={styles.sliderDot}
          activeDotStyle={styles.sliderDotActive}
          style={styles.slider}
        >
          {bannerImages.map((image) => (
            <View key={image.id} style={styles.slide}>
              <Image
                source={{ uri: image.uri }}
                style={styles.slideImage}
                resizeMode="cover"
              />
            </View>
          ))}
        </Swiper>
      </View>

      {/* Habitación Destacada */}
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

      {/* Sobre Nosotros */}
      <Text style={commonStyles.sectionTitle}>Sobre Nosotros</Text>
      <Card style={styles.aboutCard}>
        <Text style={styles.aboutText}>
          En OpenLodge creemos en crear experiencias memorables. Nuestro hotel
          boutique combina el lujo moderno con la serenidad de la naturaleza,
          ofreciendo un escape único para nuestros huéspedes.
        </Text>
      </Card>

      {/* Servicios Populares */}
      <Text style={commonStyles.sectionTitle}>Servicios Populares</Text>
      <View style={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard key={index} name={service.name} icon={service.icon} />
        ))}
      </View>

      {/* Promociones Especiales */}
      <Text style={commonStyles.sectionTitle}>Promociones Especiales</Text>
      {promos.map((promo, index) => (
        <PromoCard key={index} title={promo.title} description={promo.desc} />
      ))}

      {/* Testimonios */}
      <Text style={commonStyles.sectionTitle}>
        Lo que dicen nuestros huéspedes
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.testimonialScroll}
      >
        {testimonials.map((testimonial, index) => (
          <Card key={index} style={styles.testimonialCard}>
            <Text style={styles.testimonialText}>{testimonial.text}</Text>
            <Text style={styles.testimonialName}>- {testimonial.name}</Text>
          </Card>
        ))}
      </ScrollView>

      {/* Contacto */}
      <Text style={commonStyles.sectionTitle}>Contacto</Text>
      <Card style={styles.contactCard}>
        <View style={styles.contactItem}>
          <Icons.mapPin size={20} color={COLORS.primary} />
          <Text style={styles.contactText}>Tucumán 2721, Santa Fe</Text>
        </View>
        <View style={styles.contactItem}>
          <Icons.phone size={20} color={COLORS.primary} />
          <Text style={styles.contactText}>+52 342 231 123</Text>
        </View>
        <View style={styles.contactItem}>
          <Icons.mail size={20} color={COLORS.primary} />
          <Text style={styles.contactText}>Reservas@OpenLodge.com</Text>
        </View>
        <GradientButton
          title="Ver en el mapa"
          style={styles.mapButton}
          onPress={() => {
            /* Implementar navegación al mapa */
          }}
        />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 90,
  },
  // Estilos del slider
  sliderContainer: {
    height: 200,
    marginBottom: 20,
  },
  slider: {
    height: 200,
  },
  slide: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 20,
  },
  slideImage: {
    width: "100%",
    height: "100%",
  },
  sliderDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.border,
  },
  sliderDotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },
  // Estilos de la tarjeta destacada
  featuredCard: {
    position: "relative",
    marginHorizontal: 20,
  },
  featuredBadge: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  featuredBadgeText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.small,
    fontWeight: "700",
    letterSpacing: 1,
  },
  featuredTitle: {
    fontSize: FONT_SIZES.title,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 8,
    fontFamily: FONTS.montserrat,
  },
  featuredPrice: {
    fontSize: FONT_SIZES.xlarge,
    fontWeight: "600",
    color: COLORS.primary,
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textSecondary,
    lineHeight: 20,
    fontFamily: FONTS.roboto,
  },
  // Estilos de la sección Sobre Nosotros
  aboutCard: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  aboutText: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textSecondary,
    lineHeight: 22,
    textAlign: "center",
    fontFamily: FONTS.roboto,
  },
  // Estilos de la cuadrícula de servicios
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
  },
  // Estilos de los testimonios
  testimonialScroll: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  testimonialCard: {
    width: 300,
    marginHorizontal: 10,
    padding: 15,
  },
  testimonialText: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textSecondary,
    fontStyle: "italic",
    lineHeight: 22,
    marginBottom: 10,
    fontFamily: FONTS.roboto,
  },
  testimonialName: {
    fontSize: FONT_SIZES.regular,
    color: COLORS.textPrimary,
    fontWeight: "600",
    textAlign: "right",
    fontFamily: FONTS.montserrat,
  },
  // Estilos de la sección de contacto
  contactCard: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  contactText: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textSecondary,
    marginLeft: 10,
    flex: 1,
    fontFamily: FONTS.roboto,
  },
  mapButton: {
    marginTop: 10,
  },
});
