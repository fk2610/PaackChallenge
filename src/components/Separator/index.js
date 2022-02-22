import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const Separator = () => {
  return <View style={styles.line} />;
};

Separator.propTypes = {};

export default Separator;
