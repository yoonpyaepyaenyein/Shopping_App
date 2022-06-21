import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const data = await AsyncStorage.getItem('@user.data');
      const parseData = JSON.parse(data);
      setName(parseData.email);
      console.log('user data >>>', JSON.parse(data));
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View>
      <Text>Hello, {name}</Text>
    </View>
  );
};

export default Dashboard;
