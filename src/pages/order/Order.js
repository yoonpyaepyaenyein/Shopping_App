import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

// Components
import OrderContent from '@components/order/orderContent';
import {useLocal} from '../../hook';
// Style
import styles from './Style';

const Order = () => {
  const local = useLocal();

  const orderList = useSelector(state => state.productsList.orders);

  useEffect(() => {
    console.log('order list --------', orderList);
  }, []);

  const deleteHandler = () => {
    console.log('delet item ');
  };
  return (
    <View style={styles.container}>
      <OrderContent
        data={orderList}
        priceText={local.price}
        delete={deleteHandler}
      />
    </View>
  );
};

export default Order;
