import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import {AuthContext} from '../../context/context';

const Dashboard = () => {
  const [name, setName] = useState('');
  const {auth, getAuth, userInfo} = useContext(AuthContext);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 20}}>Hello, {userInfo.email}</Text>
      <TouchableOpacity onPress={() => getAuth(!auth)}>
        <Text style={{fontSize: 20}}>Chage Auth Value </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
