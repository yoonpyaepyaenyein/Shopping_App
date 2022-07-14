import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import FormData from 'form-data';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';

// Components
import {useLocal} from '../../hook';
import {
  encryptData,
  decryptData,
  fetchGet,
  fetchPost,
  fetchMultiUpload,
  fetchPostMulti,
} from '../../utils';
import apiUrl from '../../utils/apiUrl';

import * as actionProducts from '../../store/action/products';
import * as actionCart from '../../store/action/cart';

// Styles
import styles from './Style';

const ProductDetail = ({route}) => {
  const {data} = route.params;
  const local = useLocal();

  const [photo, setPhoto] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    // fetchData();
  }, []);

  const uploadImage = async () => {
    await launchImageLibrary().then(res => {
      setPhoto(res.assets);
    });
  };

  const fetchData = async () => {
    const uploadData = new FormData();
    let data = {
      email: 'htoo@gmail.com',
      password: 'admin123$',
    };
    uploadData.append('data', data);
    for (const key in photo) {
      uploadData.append('photos[]', {
        type: photo[key].type,
        uri: photo[key].uri,
        name: photo[key].fileName,
        width: photo[key].width,
        height: photo[key].height,
      });
    }

    const response = await fetchPostMulti(apiUrl.photo, {uploadData});
  };

  const addToCartHandler = value => {
    dispatch(actionCart.addToCart(value));
    ToastAndroid.show(local.addCartAlert, ToastAndroid.SHORT);
  };

  const updateHandler = () => {
    // console.log('--->', value);
    let updateData = {
      id: data.id,
      quantity: data.quantity,
      name: 'add new',
      currency: data.currency,
      price: 50,
      image: data.image,
    };
    dispatch(actionProducts.updateProducts(updateData));
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
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => addToCartHandler(data)}>
            <Text style={styles.buyTitle}>{local.addCart}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, {alignItems: 'center'}]}
            onPress={updateHandler}>
            <Text style={styles.buyTitle}>Update</Text>
          </TouchableOpacity>
        </View>

        {/* Upload Image */}
        {/* <TouchableOpacity onPress={uploadImage}>
          <Text>Upload Images</Text>
        </TouchableOpacity> */}

        {/* Upload Image */}
        {/* <TouchableOpacity onPress={fetchData}>
          <Text>Submit</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default ProductDetail;
