import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// Components
import OrderContent from '@components/order/orderContent';
import {useLocal} from '../../hook';
// Style
import styles from './Style';

// Action
import * as actionCart from '../../store/action/cart';

const Order = () => {
  const local = useLocal();
  const dispatch = useDispatch();

  const cartList = useSelector(state => {
    let cartData = state.cartList.cartItems;
    let updateCartList = [];
    for (const key in cartData) {
      updateCartList.push({
        id: cartData[key].id,
        quantity: cartData[key].quantity,
        name: cartData[key].name,
        currency: cartData[key].currency,
        price: cartData[key].price,
        image: cartData[key].image,
      });
    }
    return updateCartList;
  });

  useEffect(() => {
    console.log('order list --------', cartList);
  }, []);

  const deleteHandler = data => {
    console.log('delet item ');
    dispatch(actionCart.removeCart(data));
  };
  return (
    <View style={styles.container}>
      <OrderContent
        data={cartList}
        priceText={local.price}
        delete={deleteHandler}
      />
    </View>
  );
};

export default Order;
