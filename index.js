/**
 * @format
 */

import { AppRegistry } from 'react-native';
/** 更改为src目录下的 Router.js */
import Router from './src/Router';
// import App from './App';
import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Router);
