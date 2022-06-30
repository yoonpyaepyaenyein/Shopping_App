import React, {useState, useEffect, useContext} from 'react';
import {View, ToastAndroid} from 'react-native';

// Components
import {AuthContext} from '../../context/context';
import {appStorage} from '../../utils';
import UserHeader from '@components/dashboard/header/userHeader';
import Product from '@components/dashboard/product/product';

// Components
import ProductData from '../../data/product';
import {useLocal} from '../../hook';

// Styles & Icons
import styles from './Style';
import Logout from '@assets/icons/logout';

const Dashboard = ({navigation}) => {
  const [name, setName] = useState('');
  const {auth, getAuth, userInfo} = useContext(AuthContext);
  const local = useLocal();

  const productHandler = value => {
    navigation.navigate('ProductDetails', {data: value});
  };

  const logoutHandler = () => {
    appStorage.removeItem('@user.token');
    getAuth(false);
    ToastAndroid.show(local.logoutAlert, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <UserHeader
        data={userInfo}
        buttonTitle={local.logout}
        logoutAction={logoutHandler}
      />
      <Product
        data={ProductData}
        productAction={productHandler}
        price={local.price}
      />
    </View>
  );
};

export default Dashboard;
