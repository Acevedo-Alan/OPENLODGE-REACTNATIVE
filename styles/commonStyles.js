import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, FONTS } from '../constants';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: FONT_SIZES.hero,
    fontWeight: '700',
    color: COLORS.textPrimary,
    fontFamily: FONTS.montserrat,
  },
  headerSubtitle: {
    fontSize: FONT_SIZES.large,
    color: COLORS.textSecondary,
    marginTop: 5,
    fontFamily: FONTS.roboto,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.xxlarge,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginLeft: 20,
    marginTop: 25,
    marginBottom: 15,
    fontFamily: FONTS.montserrat,
  },
  scrollContent: {
    paddingBottom: 90,
  },
});

