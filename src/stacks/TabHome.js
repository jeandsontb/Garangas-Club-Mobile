import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeGarangas from '../screens/HomeGarangas';
import CarSale from '../screens/CarSale';
import History from '../screens/History';
import Members from '../screens/Members';
import Projects from '../screens/Projects';
import Partners from '../screens/Partners';

import TabCustom from '../components/TabCustom';

const ButtonTab = createBottomTabNavigator();

export default () => {
  return (
    <ButtonTab.Navigator
      initialRouteName="HomeGarangas"
      tabBar={props => <TabCustom {...props} />}>
      <ButtonTab.Screen name="HomeGarangas" component={HomeGarangas} />
      <ButtonTab.Screen name="CarSale" component={CarSale} />
      <ButtonTab.Screen name="History" component={History} />
      <ButtonTab.Screen name="Members" component={Members} />
      <ButtonTab.Screen name="Projects" component={Projects} />
      <ButtonTab.Screen name="Partners" component={Partners} />
    </ButtonTab.Navigator>
  );
};
