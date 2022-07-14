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
import * as actionOrder from '../../store/action/order';

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

  const deleteHandler = data => {
    dispatch(actionCart.removeCart(data));
  };

  const orderHandler = () => {
    dispatch(actionOrder.addOrder(cartList));
  };

  return (
    <View style={styles.container}>
      <View>
        <OrderContent
          data={cartList}
          priceText={local.price}
          delete={deleteHandler}
        />
      </View>

      {cartList.length > 0 && (
        <View style={styles.cartFooter}>
          <TouchableOpacity style={styles.btnFooter} onPress={orderHandler}>
            <Text style={{fontSize: 13, color: '#fff'}}>Order Now</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Order;
