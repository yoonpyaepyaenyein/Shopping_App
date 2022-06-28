import React, {useState, useContext} from 'react';
import {View, Text, ToastAndroid} from 'react-native';

// Components
import styles from './Style';
import RegisterComponent from '@components/register/register';
import {AuthContext} from '@context/context';
import {appStorage} from '../../../utils';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {getAuth, getUserInfo} = useContext(AuthContext);

  const registerHandler = () => {
    let token = '1234567890';

    const userData = {
      name: name,
      email: email,
      password: password,
    };

    try {
      appStorage.setItem('@user.data', JSON.stringify(userData));
      appStorage.setItem('@user.token', token);
      getAuth(true);
      getUserInfo(userData);
      ToastAndroid.show('Register success!', ToastAndroid.SHORT);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      <RegisterComponent
        emailValue={email}
        userValue={name}
        passValue={password}
        onChageUserName={val => setName(val)}
        onChageEmail={value => setEmail(value)}
        onChangePass={value => setPassword(value)}
        goRegister={registerHandler}
        goLogin={() => navigation.goBack()}
      />
    </View>
  );
};

export default Register;
