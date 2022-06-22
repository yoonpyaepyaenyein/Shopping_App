import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import styles from './Style';
import RegisterComponent from '@components/register/register';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async () => {
    const userData = {
      email: email,
      password: password,
    };

    try {
      await AsyncStorage.setItem('@user.data', JSON.stringify(userData));
      navigation.navigate('Dashboard');
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      <RegisterComponent />
    </View>
  );
};

export default Register;
