import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: wp(100),
    height: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp(2),
    marginTop: hp(1),
  },
  profileImage: {
    backgroundColor: '#365870',
    marginTop: hp(10),
    width: hp(15),
    height: hp(15),
    borderRadius: hp(20),
    borderWidth: hp(1),
    borderColor: '#284459',
    alignItems: 'center',
    justifyContent: 'center',
    // overflow: 'hidden',
    zIndex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: hp(1),
    borderRadius: hp(20),
    borderColor: '#365870',
    resizeMode: 'cover',
  },

  liveContainer: {
    backgroundColor: 'red',
    width: '70%',
    paddingVertical: wp(0.6),
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    bottom: 0,
    zIndex: 5,
    borderRadius: wp(1.5),
  },
  liveText: {
    color: '#fff',
    fontSize: hp(1.4),
    marginRight: hp(0.5),
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: hp(2),
  },

  profileName: {
    color: '#000',
    fontSize: hp(2.5),
  },

  profileEmail: {
    color: '#979EA8',
    fontSize: hp(1.8),
  },
  logout: {
    color: '#ff8800',
  },
  infoContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: wp(20),
    height: hp(10),
    borderRadius: hp(10),
    overflow: 'hidden',
  },
  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: hp(10),
    resizeMode: 'contain',
  },
  userInfo: {
    marginLeft: hp(1),
    height: '100%',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(1),
  },
  logoutTitle: {
    color: '#FA4F00',
  },
  name: {
    fontSize: hp(2.5),
    fontWeight:'bold'
  },
});
export default styles;
