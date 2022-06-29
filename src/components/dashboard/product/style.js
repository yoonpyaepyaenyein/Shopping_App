import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: wp(100),
    marginTop: hp(5),
    paddingHorizontal: hp(1.5),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productContainer: {
    backgroundColor: '#fff',
    width: wp(45),
    height: hp(15),
    padding: hp(1),
    borderRadius: hp(0.5),
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: hp(0.1),
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 5},
    shadowColor: 'blue',
    shadowOpacity: hp(0.5),
    elevation: 3,
    marginBottom: hp(2),
  },
  productTitle: {
    fontSize: hp(3),
  },
  productPrice: {
    fontSize: hp(2),
    marginTop: hp(1),
  },
});

export default styles;
