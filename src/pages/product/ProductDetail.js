import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import CryptoJS from 'crypto-js';
import Config from 'react-native-config';

// Components
import {useLocal} from '../../hook';
import {encryptData, decryptData, fetchGet, fetchPost} from '../../utils';
import apiUrl from '../../utils/apiUrl';

// Styles
import styles from './Style';

const ProductDetail = ({route}) => {
  const {data} = route.params;
  const local = useLocal();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = {
      email: 'htoo@gmail.com',
      password: 'admin123$',
    };
    const encData = encryptData(data);
    
    const response = await fetchPost(apiUrl.users, {data: encData});

    console.log('response users :::', response);

    const decData = decryptData(response);

    console.log('dec data :::',decData);
  };

  const addToCartHandler = value => {
    console.log('add to cart ::', value);
    ToastAndroid.show(local.addCartAlert, ToastAndroid.SHORT);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={data.image} style={styles.image} />
      </View>
      <View style={styles.line} />
      <View style={styles.footerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.productName}>{data.name}</Text>
          <Text style={styles.productPrice}>
            {local.price} {data.price} {data.currency}
          </Text>
        </View>

        {/* Buy Item */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => addToCartHandler(data)}>
          <Text style={styles.buyTitle}>{local.addCart}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;
