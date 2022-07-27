import React, {useState, useContext} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import auth from '@react-native-firebase/auth';

// Components
import styles from './Style';
import RegisterComponent from '@components/register/register';
import {AuthContext} from '@context/context';
import {appStorage} from '../../../utils';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {getAuth, getUserInfo, deviceToken} = useContext(AuthContext);

  const registerHandler = () => {
    // let token = '1234567890';

    // const userData = {
    //   name: name,
    //   email: email,
    //   password: password,
    // };

    // try {
    //   appStorage.setItem('@user.data', JSON.stringify(userData));
    //   appStorage.setItem('@user.token', token);
    //   getAuth(true);
    //   getUserInfo(userData);
    //   ToastAndroid.show('Register success!', ToastAndroid.SHORT);
    // } catch (error) {
    //   console.log('error', error);
    // }
    const userData = {
      name: name,
      email: email,
      password: password,
    };
    if (email && password) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
          appStorage.setItem('@user.token', deviceToken);
          appStorage.setItem('@user.data', JSON.stringify(userData));
          getAuth(true);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
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
