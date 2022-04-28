import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

const Home = ({navigation}) => {
  const [action, setAction] = useState(false);
  useEffect(() => {
    console.log(' -----> render - 1', action);
    return () => {
      console.log(' component will unmount >>>');
    };
  }, [action]);

  //   console.log(' render -----> 2');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => {
        //   navigation.navigate('Login');
          setAction(!action);
        }}>
        <Text>Go to login page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
