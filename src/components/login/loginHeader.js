import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';

import styles from './style';
import {useLocal} from '../../hook';

const loginHeader = props => {
  const local = useLocal();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{local.login}</Text>
      <View style={styles.inputContainer}>
        {/* input section */}

        <TextInput
          value={props.emailValue}
          placeholder={local.emailPlaceholder}
          style={styles.emailinput}
          onChangeText={props.onChageEmail}
        />
        <TextInput
          value={props.passValue}
          placeholder={local.passwordPlaceholder}
          style={styles.emailinput}
          secureTextEntry={true}
          onChangeText={props.onChangePass}
        />
      </View>

      {/* Button section */}

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnContent} onPress={props.goLogin}>
          <Text style={styles.loginTitle}>{local.login}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btnContent,
            {
              backgroundColor: '#fff',
              borderColor: '#7A87C4',
              borderWidth: 1.5,
              marginTop: 40,
            },
          ]}>
          <Text style={[styles.loginTitle, {color: '#7A87C4'}]}>
            {local.facebook}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btnContent,
            {
              backgroundColor: '#fff',
              borderColor: '#CFA19F',
              borderWidth: 1.5,
            },
          ]}>
          <Text style={[styles.loginTitle, {color: '#CFA19F'}]}>
            {local.google}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text>{local.forgetPwd}</Text>
        <TouchableOpacity onPress={props.goRegister}>
          <Text>{local.register}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default loginHeader;
