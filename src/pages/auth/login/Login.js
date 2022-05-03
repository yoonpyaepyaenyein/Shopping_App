import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

// Components
import styles from './Style';
import LoginHeader from '@components/login/loginHeader';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LoginHeader />
    </View>
  );
};

export default Login;
