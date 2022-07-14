import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Profile = () => {
  const orderList = useSelector(state => state.orderList.orderItems);

  useEffect(() => {
    console.log('order list :::', orderList);
  }, []);

  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
