import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import styles from './Style';
import LoginHeader from '@components/login/loginHeader';
import {AuthContext} from '../../../context/context';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {auth, getAuth, getUserInfo} = useContext(AuthContext);

  const loginHandler = async () => {
    let token = '1234567890';
    try {
      const data = await AsyncStorage.getItem('@user.data');
      console.log('user login ::', data);
      const formatData = JSON.parse(data);
      if (formatData) {
        if (formatData.email === email && formatData.password === password) {
          getAuth(true);
          getUserInfo(formatData);
          await AsyncStorage.setItem('@user.token', token);
        } else {
          ToastAndroid.show('Something wrong!', ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show('Something wrong!', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      <LoginHeader
        emailValue={email}
        onChageEmail={value => setEmail(value)}
        passValue={password}
        onChangePass={value => setPassword(value)}
        goLogin={loginHandler}
        goRegister={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;
