import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';

// Components
import styles from './Style';
import LoginHeader from '@components/login/loginHeader';
import {AuthContext} from '../../../context/context';
import {appStorage} from '../../../utils';
import {useLocal} from '../../../hook';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const local = useLocal();

  const {auth, lang, getAuth, getUserInfo, changeLanguage} =
    useContext(AuthContext);

  const loginHandler = () => {
    let token = '1234567890';
    try {
      const data = appStorage.getItem('@user.data');
      console.log('user login ::', data);
      if (data) {
        const formatData = JSON.parse(data);
        if (formatData.email === email && formatData.password === password) {
          getAuth(true);
          getUserInfo(formatData);
          appStorage.setItem('@user.token', token);
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

  console.log('language ::', lang);

  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <TouchableOpacity
          style={{padding: 5}}
          onPress={() => changeLanguage('en')}>
          <Text>English</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{padding: 5}}
          onPress={() => changeLanguage('mm')}>
          <Text>Myanmar</Text>
        </TouchableOpacity>
      </View>
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
