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
    overflow: 'hidden',
  },
  productTitle: {
    fontSize: hp(2),
  },
  productPrice: {
    fontSize: hp(1.6),
  },
  imageContainer: {
    width: '100%',
    height: hp(10),
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
});

export default styles;
