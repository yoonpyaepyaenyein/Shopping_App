import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

// Style
import styles from './style';

const product = props => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {props.data.map(item => (
          <TouchableOpacity
            style={styles.productContainer}
            activeOpacity={0.9}
            key={item.id}>
            <Text style={styles.productTitle}>{item.name}</Text>
            <Text style={styles.productPrice}>
              Price {item.price} {item.currency}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default product;
