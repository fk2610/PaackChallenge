import React from 'react';
import { ActivityIndicator, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { isIos, responsiveNumbers } from '../../utils/responsive';

const Spinner = ({ color, size, style }) => {
  return <ActivityIndicator color={color} size={size} style={style} />;
};

Spinner.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  style: ViewPropTypes.style,
};

Spinner.defaultProps = {
  color: 'blue',
  size: isIos ? 'large' : responsiveNumbers.fortyFiveScale,
};

export default Spinner;
