import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import styles from './Style';
import LoginHeader from '@components/login/loginHeader';
import {AuthContext} from '../../../context/context';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {auth, getAuth, getUserInfo} = useContext(AuthContext);

  // console.log('auth >>>', auth);

  const loginHandler = async () => {
    const userData = {
      email: email,
      password: password,
    };

    try {
      await AsyncStorage.setItem('@user.data', JSON.stringify(userData));
      getAuth(true);
      getUserInfo(userData);
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
