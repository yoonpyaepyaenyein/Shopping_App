import React, {useState, useEffect, useContext} from 'react';
import {View, ToastAndroid} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// Components
import {AuthContext} from '../../context/context';
import {appStorage} from '../../utils';
import UserHeader from '@components/dashboard/header/userHeader';
import Product from '@components/dashboard/product/product';
import * as actionProducts from '../../store/action/products';

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
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsList.products);

  useEffect(() => {
    dispatch(actionProducts.addProducts(ProductData));
  }, []);

  const productHandler = value => {
    navigation.navigate('ProductDetails', {data: value});
  };

  const logoutHandler = () => {
    appStorage.removeItem('@user.token');
    getAuth(false);
    ToastAndroid.show(local.logoutAlert, ToastAndroid.SHORT);
  };

  const createHandler = () => {
    let data = {
      id: 1,
      quantity: 1,
      name: 'add new',
      currency: 'Ks',
      price: 50,
      image: require('../../../assets/images/apple.png'),
    };

    dispatch(actionProducts.addProducts(data));
  };

  const deleteHandler = value => {
    dispatch(actionProducts.deleteProduct(value.id));
  };

  return (
    <View style={styles.container}>
      <UserHeader
        data={userInfo}
        buttonTitle={local.logout}
        logoutAction={logoutHandler}
        createAction={createHandler}
      />
      <Product
        data={products}
        productAction={productHandler}
        price={local.price}
        deleteAction={deleteHandler}
      />
    </View>
  );
};

export default Dashboard;
