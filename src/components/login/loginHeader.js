import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';

import styles from './style';

const loginHeader = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        {/* input section */}

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
          <Text style={styles.loginTitle}>Login</Text>
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

      <Text>Forget Password?</Text>
    </View>
  );
};

export default loginHeader;
