import React from 'react';
import {View, Text, Image} from 'react-native';
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

      <View style={styles.profileImage}>
        <Image
          style={styles.image}
          source={require('@assets/images/profile.jpg')}
        />
        <View style={styles.liveContainer}>
          <Text style={styles.liveText}>Live</Text>
          <Live width={hp(2)} height={hp(3)} />
        </View>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.profileName}>
          {props.data ? props.data.name : ''}
        </Text>
        <Text style={styles.profileEmail}>
          {props.data ? props.data.email : ''}
        </Text>
      </View>
    </View>
  );
};

export default userHeader;
