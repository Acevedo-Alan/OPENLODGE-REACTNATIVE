import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, FONTS } from '../constants';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  logoText: {
    fontSize: 42,
    fontFamily: FONTS.montserrat,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 20,
  },
  title: {
    fontSize: FONT_SIZES.xxlarge,
    fontFamily: FONTS.montserrat,
    color: COLORS.textPrimary,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: FONT_SIZES.medium,
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: FONT_SIZES.regular,
    fontFamily: FONTS.regular,
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 8,
    padding: 12,
    fontSize: FONT_SIZES.regular,
    fontFamily: FONTS.regular,
    color: COLORS.textPrimary,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  inputError: {
    borderColor: COLORS.error,
  },
  errorText: {
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.error,
    marginTop: 4,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    fontSize: FONT_SIZES.regular,
    fontFamily: FONTS.regular,
    color: COLORS.textPrimary,
  },
  togglePasswordButton: {
    padding: 12,
  },
  forgotPassword: {
    fontSize: FONT_SIZES.regular,
    fontFamily: FONTS.regular,
    color: COLORS.primary,
    textAlign: 'right',
    marginTop: 8,
    marginBottom: 24,
  },
  switchAuthContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  switchAuthText: {
    fontSize: FONT_SIZES.regular,
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
  },
  switchAuthLink: {
    fontSize: FONT_SIZES.regular,
    fontFamily: FONTS.montserrat,
    color: COLORS.primary,
    marginLeft: 4,
  },
});