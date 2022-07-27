import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import auths from '@react-native-firebase/auth';

// Components
import styles from './Style';
import LoginHeader from '@components/login/loginHeader';
import {AuthContext} from '../../../context/context';
import {appStorage} from '../../../utils';
import {useLocal} from '../../../hook';
import AlertModal from '@components/alert/alertModal';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shwoModal, setShowModal] = useState(false);
  const local = useLocal();

  const {auth, lang, getAuth, getUserInfo, changeLanguage} =
    useContext(AuthContext);

  const loginHandler = () => {
    // let token = '1234567890';
    // try {
    //   const data = appStorage.getItem('@user.data');
    //   if (data) {
    //     const formatData = JSON.parse(data);
    //     if (formatData.email === email && formatData.password === password) {
    //       getAuth(true);
    //       getUserInfo(formatData);
    //       appStorage.setItem('@user.token', token);
    //       ToastAndroid.show(local.loginSuccess, ToastAndroid.SHORT);
    //     } else {
    //       ToastAndroid.show(local.error, ToastAndroid.SHORT);
    //     }
    //   } else {
    //     ToastAndroid.show(local.error, ToastAndroid.SHORT);
    //   }
    // } catch (error) {
    //   console.log('error', error);
    // }

    let data = {
      email: email,
      password: password,
    };

    if (email && password) {
      auths()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account signed success!');
          getAuth(true);
          getUserInfo(data);
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    } else {
      console.log('email or password required');
    }
  };

  const chageLanguageHandler = value => {
    appStorage.setItem('@language', value);
    changeLanguage(value);
    setShowModal(false);
  };

  const languageHandler = () => {
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <TouchableOpacity style={{padding: 5}} onPress={languageHandler}>
          {lang === 'en' ? <Text>English</Text> : <Text>Myanmar</Text>}
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
      {/* Modal */}

      {shwoModal && (
        <AlertModal
          languageAction={value => chageLanguageHandler(value)}
          selectedLang={lang}
        />
      )}
    </View>
  );
};

export default Login;
