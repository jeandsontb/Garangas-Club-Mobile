import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerCustom from '../components/DrawerCustom';
import TabHome from './TabHome';
import Login from '../screens/Login';

import MyProjects from '../screens/MyProjects';
import Add from '../screens/MyProjects/actions/Add';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerCustom {...props} />}>
      <Drawer.Screen name="TabHome" component={TabHome} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="MyProjects" component={MyProjects} />
      <Drawer.Screen name="Add" component={Add} />
    </Drawer.Navigator>
  );
};
