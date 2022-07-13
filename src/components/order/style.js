import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: wp(90),
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginHorizontal: hp(1),
    marginTop: hp(1.5),
    justifyContent: 'space-between',
    borderRadius: hp(1),
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: hp(0.5)},
    shadowOpacity: 0.2,
    shadowRadius: hp(1),
    elevation: 3,
  },
  emptyCartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: wp(20),
    height: '100%',
    resizeMode: 'cover',
  },
  leftContianer: {
    height: hp(8),
    flexDirection: 'row',
  },
  rightContainer: {
    alignItems: 'center',
    marginRight: hp(2),
    justifyContent: 'center',
  },
  productInfo: {
    justifyContent: 'space-evenly',
    paddingHorizontal: hp(2),
  },
  name: {
    fontSize: hp(2),
    fontWeight: 'bold',
    fontFamily: 'GentiumBookPlus-Regular',
  },
  price: {
    fontSize: hp(1.6),
    fontFamily: 'GentiumBookPlus-Regular',
  },
  deletBtn: {
    backgroundColor: '#FF2D50',
    paddingHorizontal: hp(2),
    borderRadius: hp(0.5),
    marginRight: hp(1),
  },
  delete: {
    fontSize: hp(1.8),
    color: '#fff',
    fontFamily: 'GentiumBookPlus-Regular',
  },
  cartTitle: {
    fontSize: hp(2.5),
    fontFamily: 'GentiumBookPlus-Regular',
  },
  quantity: {
    color: '#fff',
    fontSize: hp(1.6),
    borderRadius: hp(10),
    paddingHorizontal: hp(0.8),
    backgroundColor: '#ff8800',
    marginLeft: hp(0.5),
  },
});

export default styles;
