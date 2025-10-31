import { useState } from 'react';

export  const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Inicio', icon: Icons.home },
    { id: 'explore', label: 'Explorar', icon: Icons.explore },
    { id: 'reservas', label: 'Reservas', icon: Icons.calendar },
    { id: 'profile', label: 'Perfil', icon: Icons.profile },
  ];

  const renderScreen = () => {
    switch (activeTab) {
      case 'home': return <HomeScreen />;
      case 'profile': return <ProfileScreen />;
      case 'reservas': return <ReservasScreen />;
      case 'explore': return <ExplorarScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <View style={styles.app}>
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
  app: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginBottom: 70,
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2d3436',
    fontFamily: 'Montserrat',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#636e72',
    marginTop: 5,
    fontFamily: 'Roboto',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2d3436',
    marginLeft: 20,
    marginTop: 25,
    marginBottom: 15,
    fontFamily: 'Montserrat',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  gradientButton: {
    backgroundColor: '#00b894',
    backgroundImage: 'linear-gradient(135deg, #00b894 0%, #55efc4 100%)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#00b894',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
  featuredCard: {
    position: 'relative',
  },
  featuredBadge: {
    backgroundColor: '#00b894',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  featuredBadgeText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  featuredTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2d3436',
    marginBottom: 8,
    fontFamily: 'Montserrat',
  },
  featuredPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00b894',
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 14,
    color: '#636e72',
    lineHeight: 20,
    fontFamily: 'Roboto',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  },
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
    fontSize: 14,
    fontWeight: '600',
    color: '#2d3436',
    textAlign: 'center',
  },
  promoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  promoContent: {
    flex: 1,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3436',
    marginBottom: 4,
  },
  promoDesc: {
    fontSize: 13,
    color: '#636e72',
  },
  promoArrow: {
    fontSize: 20,
    color: '#00b894',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#00b894',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#00b894',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#ffffff',
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2d3436',
    marginBottom: 5,
    fontFamily: 'Montserrat',
  },
  profileEmail: {
    fontSize: 14,
    color: '#636e72',
  },
  statsCard: {
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#00b894',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 13,
    color: '#636e72',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#dfe6e9',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  menuTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#2d3436',
  },
  menuArrow: {
    fontSize: 18,
    color: '#b2bec3',
  },
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
    fontSize: 18,
    fontWeight: '600',
    color: '#2d3436',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  statusText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  bookingDates: {
    fontSize: 14,
    color: '#636e72',
    marginBottom: 6,
  },
  bookingLocation: {
    fontSize: 14,
    color: '#636e72',
    marginBottom: 15,
  },
  bookingActions: {
    flexDirection: 'row',
    gap: 10,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#00b894',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  actionButtonSecondary: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dfe6e9',
  },
  actionButtonSecondaryText: {
    color: '#636e72',
    fontSize: 14,
    fontWeight: '600',
  },
  historyCard: {
    marginBottom: 12,
  },
  historyRoom: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3436',
    marginBottom: 6,
  },
  historyDates: {
    fontSize: 13,
    color: '#636e72',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  ratingStar: {
    fontSize: 16,
    marginRight: 2,
  },
  activityCard: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  activityImage: {
    fontSize: 60,
    marginRight: 15,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2d3436',
    marginBottom: 6,
  },
  activityDescription: {
    fontSize: 13,
    color: '#636e72',
    marginBottom: 12,
  },
  activityFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#00b894',
  },
  activityButton: {
    backgroundColor: '#00b894',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  activityButtonText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
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
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3436',
    marginBottom: 4,
  },
  placeDistance: {
    fontSize: 13,
    color: '#636e72',
  },
  placeArrow: {
    fontSize: 20,
    color: '#b2bec3',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingBottom: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#dfe6e9',
    shadowColor: '#000',
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
    fontSize: 11,
    color: '#95a5a6',
    fontWeight: '500',
  },
  tabLabelActive: {
    color: '#00b894',
    fontWeight: '600',
  },
  title: {
    fontFamily: FONTS.titleBold,  // Poppins Bold
    fontSize: FONT_SIZES.title,
  },
  bodyText: {
    fontFamily: FONTS.regular,    // Inter Regular
    fontSize: FONT_SIZES.regular,
  },
  subtitle: {
    fontFamily: FONTS.medium,     // Inter Medium
    fontSize: FONT_SIZES.medium,
  },
  button: {
    fontFamily: FONTS.semibold,   // Inter SemiBold
    fontSize: FONT_SIZES.regular,
  },
});

export default App;