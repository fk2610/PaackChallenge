import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../store';

export const renderWithContext = component => {
  return {
    ...renderer.create(<Provider store={store}>{component}</Provider>),
  };
};
