import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import styles from './Style';
import RegisterComponent from '@components/register/register';
import {AuthContext} from '@context/context';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {getAuth, getUserInfo} = useContext(AuthContext);

  const registerHandler = async () => {
    let token = '1234567890';

    const userData = {
      name: name,
      email: email,
      password: password,
    };

    try {
      await AsyncStorage.setItem('@user.data', JSON.stringify(userData));
      await AsyncStorage.setItem('@user.token', token);
      getAuth(true);
      getUserInfo(userData);
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
