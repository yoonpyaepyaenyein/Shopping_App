import React, {useState} from 'react';
import {View, Text} from 'react-native';
import codePush from "react-native-code-push";

import AppNavigator from './src/navigation/appNavigator';

const App = () => {
  return <AppNavigator />;
};

export default codePush(App);
