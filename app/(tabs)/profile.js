import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../../components/Card';
import GradientButton from '../../components/GradientButton';
import { COLORS, FONT_SIZES, FONTS, Icons } from '../../constants';
import { commonStyles } from '../../styles/commonStyles';

export default function ProfileScreen() {
  // State for user data including profile image
  const [userData, setUserData] = useState({
    name: 'Juan García',
    email: 'Juan.garcia32@gmail.com',
    initials: 'JG',
    profileImage: null,
    stats: {
      reservations: 12,
      reviews: 5,
      level: 'VIP'
    }
  });

  // Handle image picking
  const handleImagePick = async () => {
    try {
      // Request permission to access the media library
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert(
          'Permiso Denegado',
          'Necesitamos acceso a tu galería para cambiar la foto de perfil.',
          [{ text: 'OK' }]
        );
        return;
      }

      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        // Update user data with the new image
        setUserData(prev => ({
          ...prev,
          profileImage: result.assets[0].uri
        }));
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'No se pudo cargar la imagen. Por favor, intenta de nuevo.',
        [{ text: 'OK' }]
      );
    }
  };

  // Menu items configuration with routes
  const menuItems = [
    { title: 'Información Personal', icon: Icons.user, route: '/' },
    { title: 'Métodos de Pago', icon: Icons.creditCard, route: '/' },
    { title: 'Preferencias', icon: Icons.settings, route: '/' },
    { title: 'Notificaciones', icon: Icons.notification, route: '/' },
  ];

  // Navigation handler for menu items
  const handleMenuPress = (route) => {
    router.push(route);
  };

  // Logout handler
  const handleLogout = () => {
    // Add your logout logic here
    // Example: clear auth tokens, reset state, etc.
    router.replace('/login');
  };

  // Render avatar based on whether we have an image URL or need to show initials
  const renderAvatar = () => {
    if (userData.profileImage) {
      return (
        <Image
          source={{ uri: userData.profileImage }}
          style={styles.avatarImage}
        />
      );
    }
    return <Text style={styles.avatarText}>{userData.initials}</Text>;
  };

  return (
    <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
      {/* Profile Header Section */}
      <View style={styles.profileHeader}>
        <Pressable onPress={handleImagePick}>
          <View style={styles.avatar}>
            {renderAvatar()}
            <View style={styles.editIconContainer}>
              {React.createElement(Icons.settings, {
                size: 16,
                color: COLORS.white
              })}
            </View>
          </View>
        </Pressable>
        <Text style={styles.profileName}>{userData.name}</Text>
        <Text style={styles.profileEmail}>{userData.email}</Text>
      </View>

      {/* Stats Card Section */}
      <Card style={styles.statsCard}>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userData.stats.reservations}</Text>
            <Text style={styles.statLabel}>Reservas</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userData.stats.reviews}</Text>
            <Text style={styles.statLabel}>Reseñas</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userData.stats.level}</Text>
            <Text style={styles.statLabel}>Nivel</Text>
          </View>
        </View>
      </Card>

      {/* Menu Section */}
      <Text style={commonStyles.sectionTitle}>Mi Cuenta</Text>
      
      {menuItems.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => handleMenuPress(item.route)}
          style={({ pressed }) => [
            styles.menuItemContainer,
            pressed && styles.menuItemPressed
          ]}
        >
          <Card style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              {item.icon && React.createElement(item.icon, {
                size: 24,
                color: COLORS.primary
              })}
            </View>
            <Text style={styles.menuTitle}>{item.title}</Text>
            {React.createElement(Icons.arrowRight, {
              size: 20,
              color: COLORS.textLight
            })}
          </Card>
        </Pressable>
      ))}

      {/* Logout Button */}
      <GradientButton 
        title="Cerrar Sesión" 
        style={styles.logoutButton}
        onPress={handleLogout}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 120, // Increased padding for better spacing on small devices
  },
  profileHeader: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: COLORS.white,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: COLORS.backgroundLight,
  },
  editIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.primary,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  avatarText: {
    fontSize: 40,
    fontWeight: '700',
    color: COLORS.white,
    fontFamily: FONTS.montserrat,
  },
  profileName: {
    fontSize: FONT_SIZES.header,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 8,
    fontFamily: FONTS.montserrat,
  },
  profileEmail: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textSecondary,
    fontFamily: FONTS.regular,
  },
  statsCard: {
    marginHorizontal: 20,
    marginBottom: 25,
    paddingVertical: 15,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 5,
  },
  statNumber: {
    fontSize: FONT_SIZES.header,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 8,
    fontFamily: FONTS.montserrat,
  },
  statLabel: {
    fontSize: FONT_SIZES.regular,
    color: COLORS.textSecondary,
    fontFamily: FONTS.regular,
  },
  statDivider: {
    width: 1,
    height: '60%',
    backgroundColor: COLORS.border,
  },
  menuItemContainer: {
    marginBottom: 12, // Added spacing between menu items
  },
  menuItemPressed: {
    opacity: 0.7,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuIconContainer: {
    width: 32,
    height: 32,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 8,
  },
  menuTitle: {
    flex: 1,
    fontSize: FONT_SIZES.large,
    fontWeight: '500',
    color: COLORS.textPrimary,
    fontFamily: FONTS.regular,
  },
  logoutButton: {
    margin: 20,
    marginTop: 30,
  },
});