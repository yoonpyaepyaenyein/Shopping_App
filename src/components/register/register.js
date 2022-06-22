import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';

import styles from './style';

const Register = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.inputContainer}>
        {/* input section */}

        <TextInput
          value={props.userValue}
          placeholder="User Name ...."
          style={styles.emailinput}
          onChangeText={props.onChageUserName}
        />

        <TextInput
          value={props.emailValue}
          placeholder="Email...."
          style={styles.emailinput}
          onChangeText={props.onChageEmail}
        />
        <TextInput
          value={props.passValue}
          placeholder="Password...."
          style={styles.emailinput}
          secureTextEntry={true}
          onChangeText={props.onChangePass}
        />
      </View>

      {/* Button section */}

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnContent} onPress={props.goLogin}>
          <Text style={styles.loginTitle}>Register</Text>
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
          <Text style={[styles.loginTitle, {color: '#7A87C4'}]}>Facebook</Text>
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
          <Text style={[styles.loginTitle, {color: '#CFA19F'}]}>Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text>Forget Password?</Text>
        <TouchableOpacity onPress={props.goRegister}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
