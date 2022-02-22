import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DeliveriesContainer from '../screens/Deliveries';
import DeliveryDetailsContainer from '../screens/DeliveryDetails';

const Main = createStackNavigator();

export default function MainNavigator() {
  return (
    <Main.Navigator initialRouteName="deliveries">
      <Main.Screen name="deliveries.home" component={DeliveriesContainer} />
      <Main.Screen
        name="delivery.details"
        component={DeliveryDetailsContainer}
      />
    </Main.Navigator>
  );
}
