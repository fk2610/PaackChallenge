import { StyleSheet } from 'react-native';

import { responsiveNumbers } from '../../utils/responsive';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: responsiveNumbers.twentyScale,
    paddingVertical: responsiveNumbers.fiveScale,
  },
  textButton: {
    fontWeight: '700',
    fontSize: responsiveNumbers.eighteenScale,
  },
});
