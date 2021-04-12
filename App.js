import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';

import {StateProvider} from './src/contexts/StateContext';
import AuthStack from './src/stacks/AuthStack';

export default () => {
  // useEffect(() => {
  //   const requestNotifPermission = async () => {
  //     const authStatus = await messaging().requestPermission();

  //     console.log('Permissao ', authStatus);
  //   };

  //   return () => requestNotifPermission();
  // }, []);

  return (
    <StateProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </StateProvider>
  );
};
