import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Icons
import Live from '@assets/icons/live';

//Style
import styles from './style';

const userHeader = props => {
  return (
    <View style={styles.container}>
      {/* profile Image */}
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('@assets/images/profile.jpg')}
            style={styles.userImage}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{props.data.name}</Text>
          <Text style={styles.email}>{props.data.email}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={props.logoutAction}>
        <Text style={styles.logoutTitle}>{props.buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default userHeader;
