import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

// import TabHome from './TabHome';
import TabHome from './TabHome';
import Login from '../screens/Login';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TabHome" component={TabHome} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};
