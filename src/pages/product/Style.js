import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    width: wp(100),
    height: hp(25),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  footerContainer: {
    width: wp(100),
    height: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: hp(2),
  },
  titleContainer: {
    height: '100%',
    justifyContent: 'space-around',
  },
  productName: {
    fontSize: hp(3),
    fontFamily: 'GentiumBookPlus-Regular',
  },
  productPrice: {
    fontSize: hp(2),
  },
  line: {
    width: wp(90),
    height: 0.5,
    backgroundColor: '#000',
    marginTop: hp(3),
  },
  button: {
    backgroundColor: '#D98D00',
    paddingHorizontal: hp(2),
    paddingVertical: hp(0.8),
    shadowOffset: {width: 0, height: 6},
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: hp(1),
    elevation: 3,
    borderRadius: hp(5),
    marginTop: hp(0.8),
  },
  buyTitle: {
    color: '#fff',
  },
});

export default styles;
