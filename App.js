import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import store from './src/store';
import AppNavigator from './src/navigators/main';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer
      // ref={navigationRef}
      >
        {/* <Text> App</Text> */}
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
