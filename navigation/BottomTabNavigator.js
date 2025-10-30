import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icons } from '../constants/icons';
import { COLORS, FONT_SIZES } from '../constants';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ReservasScreen from '../screens/ReservasScreen';
import ExplorarScreen from '../screens/ExplorarScreen';

const BottomTabNavigator = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Inicio', icon: Icons.home, component: HomeScreen },
    { id: 'explore', label: 'Explorar', icon: Icons.explore, component: ExplorarScreen },
    { id: 'reservas', label: 'Reservas', icon: Icons.calendar, component: ReservasScreen },
    { id: 'profile', label: 'Perfil', icon: Icons.profile, component: ProfileScreen },
  ];

  const renderScreen = () => {
    const activeTabData = tabs.find(tab => tab.id === activeTab);
    const ScreenComponent = activeTabData?.component || HomeScreen;
    return <ScreenComponent />;
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      
      <View style={styles.bottomNav}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={styles.tabButton}
            onPress={() => setActiveTab(tab.id)}
          >
            <Text style={[
              styles.tabIcon,
              activeTab === tab.id && styles.tabIconActive
            ]}>
              {tab.icon}
            </Text>
            <Text style={[
              styles.tabLabel,
              activeTab === tab.id && styles.tabLabelActive
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingBottom: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  tabIconActive: {
    fontSize: 26,
  },
  tabLabel: {
    fontSize: FONT_SIZES.small,
    color: COLORS.textLight,
    fontWeight: '500',
  },
  tabLabelActive: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});

export default BottomTabNavigator;