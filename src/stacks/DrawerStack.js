import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerCustom from '../components/DrawerCustom';
import TabHome from './TabHome';
import Login from '../screens/Login';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerCustom {...props} />}>
      <Drawer.Screen name="TabHome" component={TabHome} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};
