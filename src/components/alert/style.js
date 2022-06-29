import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(127,127, 127, 0.6)',
    width: wp(100),
    height: hp(100),
    position: 'absolute',
  },
  modalContainer: {
    width: wp(70),
    height: hp(20),
    backgroundColor: '#fff',
    borderRadius: hp(0.3),
    justifyContent: 'space-evenly',
  },
  item: {
    // backgroundColor: '#ddd',
    paddingHorizontal: hp(3),
    paddingVertical: hp(1),
  },
  headerTitle: {
    alignSelf: 'center',
    fontSize: hp(2),
  },
  title: {
    color: 'blue',
  },
  line: {
    width: '90%',
    height: hp(0.1),
    backgroundColor: '#ddd',
    alignSelf: 'center',
  },
});

export default styles;
