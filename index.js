import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

//recebendo notificações em background (App fechado)
// messaging().setBackgroundMessageHandler(async remoteMessaging => {});

AppRegistry.registerComponent(appName, () => App);

// :root {
//     --blue-strong:#184059;
//     --blue-active:#51608C;
//     --blue-relative:#8697A6;
//     --blue-gray:#BFCDD9;
//     --blue-azure:#F0FFFF;
//     --brown-strong:#8C2F1B;
//     --brown-relative:#BF8756;
//     --brown-active:#8C4F2B;
//     --black-active:#000000;
//     --white-active:#F5FFFA;
//     --grey-soft:#D7D7D9;
//   }
