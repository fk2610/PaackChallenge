import { StyleSheet } from 'react-native';

import { responsiveNumbers } from '../../../utils/responsive';

export const ITEM_HEIGHT = responsiveNumbers.twentyFiveScale;

export const styles = StyleSheet.create({
  activeTextStyle: {
    alignSelf: 'center',
    marginTop: responsiveNumbers.twentyScale,
  },
  updateButtonStyle: { marginBottom: responsiveNumbers.tenScale },
});
