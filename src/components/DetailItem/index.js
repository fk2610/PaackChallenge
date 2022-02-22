import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

const DetailItem = ({ title, subtitle, subStyle, titleStyle, lines }) => {
  return (
    <Text
      numberOfLines={lines}
      adjustsFontSizeToFit
      style={[styles.subtitle, subStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {subtitle}
    </Text>
  );
};

DetailItem.propTypes = {
  titleStyle: Text.propTypes.style,
  subStyle: Text.propTypes.style,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  lines: PropTypes.number,
};

DetailItem.defaultProps = {
  lines: 1,
};

export default DetailItem;
