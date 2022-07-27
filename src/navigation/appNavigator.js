import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import messaging from '@react-native-firebase/messaging';

// TabStack
import TabNavigator from './tabs/TabNavigator';

// Comonents
import AuthStack from './stack/AuthStack';
import {AuthContext} from '../context/context';
import {appStorage} from '../utils';
import store from '../store';

const appNavigator = () => {
  const [auth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [splash, setSplash] = useState(true);
  const [lang, setLang] = useState('en');
  const [deviceToken, setDeviceToken] = useState(null);

  // Handle user state changes
  // const onAuthStateChanged = user => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };

  // if (initializing) return null;

  useEffect(() => {
    // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    getData();
    SplashScreen.hide();
    getToken();
    // return subscriber; // unsubscribe on unmount
  }, []);

  const getToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      appStorage.setItem('@device.token', fcmToken);
      setDeviceToken(fcmToken);
    } else {
      console.log('token error');
    }
  };

  const context = {
    auth,
    lang,
    userInfo,
    deviceToken,
    getAuth: value => {
      setAuth(value);
    },
    getUserInfo: value => {
      setUserInfo(value);
    },
    changeLanguage: value => {
      setLang(value);
    },
  };

  const getData = () => {
    try {
      const data = appStorage.getItem('@device.token');
      const userData = appStorage.getItem('@user.data');
      const storeLang = appStorage.getItem('@language');
      setLang(storeLang);
      if (data) {
        setAuth(true);
        setUserInfo(userData ? JSON.parse(userData) : '');
        setTimeout(() => {
          setSplash(false);
        }, 2000);
      } else {
        setAuth(false);
        setTimeout(() => {
          setSplash(false);
        }, 2000);
      }
    } catch (error) {
      console.log('error', error);
      setAuth(false);
    }
  };

  if (splash) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20}}>Welcome to our app</Text>
      </View>
    );
  } else if (auth) {
    return (
      <Provider store={store}>
        <AuthContext.Provider value={context}>
          <TabNavigator />
        </AuthContext.Provider>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <AuthContext.Provider value={context}>
          <NavigationContainer>
            <AuthStack />
          </NavigationContainer>
        </AuthContext.Provider>
      </Provider>
    );
  }
};

export default appNavigator;
