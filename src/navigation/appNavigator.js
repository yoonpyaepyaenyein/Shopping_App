import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

// Comonents
import AuthStack from './stack/AuthStack';
import DashboardStack from './stack/DashboardStack';
import {AuthContext} from '../context/context';
import {appStorage} from '../utils';
import store from '../store';

const appNavigator = () => {
  const [auth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [splash, setSplash] = useState(true);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    getData();
  }, []);

  const context = {
    auth,
    lang,
    userInfo,
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
      const data = appStorage.getItem('@user.token');
      const userData = appStorage.getItem('@user.data');
      const storeLang = appStorage.getItem('@language');
      setLang(storeLang);
      if (data) {
        setAuth(true);
        setUserInfo(JSON.parse(userData));
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
          <NavigationContainer>
            <DashboardStack />
          </NavigationContainer>
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
