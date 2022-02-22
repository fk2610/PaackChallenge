import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const Container = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

Container.propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style,
};

export default Container;
