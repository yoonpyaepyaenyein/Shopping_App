import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  
  background: {
    marginTop: hp(10),
    width: hp(18),
    height: hp(18),
    borderRadius: hp(20),
    position: 'absolute',
  },
  
  logoutContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: 'green',
    paddingHorizontal: hp(1),
    marginTop: hp(10),
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
