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
    justifyContent: 'space-between',
  },
  cartFooter: {
    width: wp(100),
    paddingVertical: hp(3),
    paddingRight: hp(2),
    alignItems: 'flex-end',
  },
  btnFooter: {
    backgroundColor: 'green',
    paddingHorizontal: hp(2),
    paddingVertical: hp(0.5),
    
  },
});

export default styles;
