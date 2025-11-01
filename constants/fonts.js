import { Platform } from 'react-native';

export const FONTS = {
  montserrat: Platform.select({
    ios: 'System',
    android: 'sans-serif',
  }),
  roboto: Platform.select({
    ios: 'System',
    android: 'sans-serif',
  }),
  regular: Platform.select({
    ios: 'System',
    android: 'sans-serif',
  }),
};

export const FONT_SIZES = {
  small: 11,
  regular: 13,
  medium: 14,
  large: 16,
  xlarge: 18,
  xxlarge: 20,
  title: 22,
  header: 24,
  hero: 32,
};