import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';

// Style
import styles from './style';

const product = props => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 10}}>
      <View style={styles.container}>
        {props.data.map(item => (
          <TouchableOpacity
            style={styles.productContainer}
            activeOpacity={0.9}
            onPress={() => props.productAction(item)}
            key={item.id}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.productImage} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.productTitle}>{item.name}</Text>
              <Text style={styles.productPrice}>
                {props.price} {item.price} {item.currency}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default product;
