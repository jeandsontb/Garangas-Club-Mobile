import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import DrawerStack from './DrawerStack';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Preload"
        component={Preload}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
