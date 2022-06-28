import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'green',
  },
  title: {
    fontSize: hp(4),
    fontWeight: 'bold',
    marginTop: hp(10),
    color: '#6B778A',
  },
  inputContainer: {
    marginVertical: hp(3),
  },

  emailinput: {
    borderBottomWidth: hp(0.2),
    borderColor: '#ddd',
    width: wp(70),
    fontSize: hp(2),
    marginTop: hp(3),
  },

  btnContainer: {
    marginVertical: hp(4),
  },
  btnContent: {
    backgroundColor: '#6B778A',
    width: wp(70),
    paddingVertical: hp(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(50),
    marginTop: hp(2),
  },
  loginTitle: {
    fontSize: hp(2),
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    width: wp(100),
    justifyContent: 'space-around',
  },
});

export default styles;
