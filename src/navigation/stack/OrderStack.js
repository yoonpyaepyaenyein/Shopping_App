import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Components
import OrderScreen from '@pages/order/Order';
import {useLocal} from '../../hook';

const Stack = createNativeStackNavigator();

const OrderStack = () => {
  const local = useLocal();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Order" component={OrderScreen} />
    </Stack.Navigator>
  );
};

export default OrderStack;
