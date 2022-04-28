import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Components
import HomeScreen from './Home';
import LoginScreen from './Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ff8800',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: hp(5),
  },
  footer: {
    width: wp(100),
    backgroundColor: '#fff',
    marginTop: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default App;
