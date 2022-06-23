import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import {AuthContext} from '../../context/context';

// Styles & Icons
import styles from './Style';
import Live from '@assets/icons/live';
import Logout from '@assets/icons/logout';

const Dashboard = () => {
  const [name, setName] = useState('');
  const {auth, getAuth, userInfo} = useContext(AuthContext);

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('@user.data');
      getAuth(false);
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <View style={styles.container}>
      {/* profile Image */}

      <View style={styles.profileImage}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/profile.jpg')}
        />
        <View style={styles.liveContainer}>
          <Text style={styles.liveText}>Live</Text>
          <Live width={hp(2)} height={hp(3)} />
        </View>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.profileName}>Htoo Myat</Text>
        <Text style={styles.profileEmail}>@htoo</Text>
      </View>

      {/* <View style={styles.logoutContainer}> */}
      <TouchableOpacity onPress={removeData} style={styles.logoutContainer}>
        <Logout width={hp(4)} height={hp(4)} />
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

export default Dashboard;
