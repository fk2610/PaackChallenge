/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import { renderWithContext } from '../src/utils/testsHelper';

it('renders correctly', () => {
  renderWithContext(<App />);
});
