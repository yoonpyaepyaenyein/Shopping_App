import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';

// Style
import styles from './style';

const product = props => {
  // Flatlist Render
  const renderComponent = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.productContainer}
        activeOpacity={0.9}
        onPress={() => props.productAction(item)}>
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
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{flexWrap: 'wrap'}}
      data={props.data}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderComponent}
    />
  );
};

export default product;
