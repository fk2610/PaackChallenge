import { StyleSheet } from 'react-native';
import { responsiveNumbers } from '../../utils/responsive';

export const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: responsiveNumbers.eighteenScale,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: responsiveNumbers.fourteenScale,
  },
});
