import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Comonents
import AuthStack from './stack/AuthStack';
import DashboardStack from './stack/DashboardStack';
import {AuthContext} from '../context/context';

const appNavigator = () => {
  const [auth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const context = {
    auth,
    userInfo,
    getAuth: value => {
      setAuth(value);
    },
  };

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('@user.data');
      if (data) {
        setAuth(true);
        setUserInfo(JSON.parse(data));
      } else {
        setAuth(false);
      }
    } catch (error) {
      console.log('error', error);
      setAuth(false);
    }
  };

  if (auth) {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <DashboardStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  } else {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
};

export default appNavigator;
