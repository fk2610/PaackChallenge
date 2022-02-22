import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const Button = ({ title, style, onPress, buttonTextStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.textButton, buttonTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  buttonTextStyle: Text.propTypes.style,
};

export default Button;
