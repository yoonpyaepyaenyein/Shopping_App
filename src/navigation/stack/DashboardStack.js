import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Components
import DashboardScreen from '@pages/dashboard/Dashboard';
import ProductDetailScreen from '@pages/product/ProductDetail';
import {useLocal} from '../../hook';

const Stack = createNativeStackNavigator();

const DashboardStack = () => {
  const local = useLocal();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailScreen}
        options={{
          title: local.productDetail,
          headerTitleStyle: {
            fontSize: hp(2),
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;
