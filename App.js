/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationView from './navigation';
// import {createAppContainer} from 'react-navigation';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ReactNavigator from './profile/Profile';
// import {createAppContainer} from 'react-navigation';
//import {createstackna} from 'react-navigation-stack';
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <NavigationView />
    </>
  );
};

export default App;
