import {AppRegistry} from 'react-native';
import Main from './src/screens/Main';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Signup);
