import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerCustom from '../components/DrawerCustom';
import TabHome from './TabHome';
import Login from '../screens/Login';

import MyProjects from '../screens/MyProjects';
import Add from '../screens/MyProjects/actions/Add';
import Edit from '../screens/MyProjects/actions/Edit';

import MyCarSale from '../screens/MyCarSale';
import AddCarSale from '../screens/MyCarSale/actions/Add';
import EditCarSale from '../screens/MyCarSale/actions/Edit';

import MyMembers from '../screens/MyMembers';
import AddMembers from '../screens/MyMembers/actions/Add';
import EditMembers from '../screens/MyMembers/actions/Edit';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerCustom {...props} />}>
      <Drawer.Screen name="TabHome" component={TabHome} />
      <Drawer.Screen name="Login" component={Login} />

      <Drawer.Screen name="MyProjects" component={MyProjects} />
      <Drawer.Screen name="Add" component={Add} />
      <Drawer.Screen name="Edit" component={Edit} />

      <Drawer.Screen name="MyCarSale" component={MyCarSale} />
      <Drawer.Screen name="AddCarSale" component={AddCarSale} />
      <Drawer.Screen name="EditCarSale" component={EditCarSale} />

      <Drawer.Screen name="MyMembers" component={MyMembers} />
      <Drawer.Screen name="AddMembers" component={AddMembers} />
      <Drawer.Screen name="EditMembers" component={EditMembers} />
    </Drawer.Navigator>
  );
};
