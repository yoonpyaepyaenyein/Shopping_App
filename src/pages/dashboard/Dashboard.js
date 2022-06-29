import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

// Components
import {AuthContext} from '../../context/context';
import {appStorage} from '../../utils';
import UserHeader from '@components/dashboard/header/userHeader';
import Product from '@components/dashboard/product/product';

// Components
import ProductData from '../../data/product';

// Styles & Icons
import styles from './Style';
import Logout from '@assets/icons/logout';

const Dashboard = () => {
  const [name, setName] = useState('');
  const {auth, getAuth, userInfo} = useContext(AuthContext);

  const removeData = ({navigation}) => {
    try {
      appStorage.removeItem('@user.token');
      getAuth(false);
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <View style={styles.container}>
      <UserHeader data={userInfo} />
      <Product data={ProductData} />
    </View>
  );
};

export default Dashboard;
