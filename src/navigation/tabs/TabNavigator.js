import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Stack
import DashboardStack from '../stack/DashboardStack';
import ProfileStack from '../stack/ProfileStack';
import OrderStack from '../stack/OrderStack';

// Icons
import DashboardIcon from '@assets/icons/dashboard';
import CartIcon from '@assets/icons/cart';
import ProfileIcon from '@assets/icons/profile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="DashboardStack"
          component={DashboardStack}
          options={{
            headerShown: false,
            title: 'Dashboard',
            tabBarIcon: ({focused, color, size}) => (
              <DashboardIcon
                colors={focused ? '#A0DE83' : '#000'}
                width={hp(5)}
                height={hp(5)}
              />
            ),
            tabBarLabelStyle: {
              fontSize: hp(1.6),
              paddingBottom: hp(0.5),
            },

            tabBarActiveTintColor: '#A0DE83',
            tabBarInactiveTintColor: '#000',
          }}
        />
        <Tab.Screen
          name="OrderStack"
          component={OrderStack}
          options={{
            headerShown: false,
            title: 'Order',
            tabBarIcon: ({focused, color, size}) => (
              <CartIcon
                colors={focused ? '#A0DE83' : '#000'}
                width={hp(3.8)}
                height={hp(3.8)}
              />
            ),
            tabBarLabelStyle: {
              fontSize: hp(1.6),
              paddingBottom: hp(0.5),
            },
            tabBarActiveTintColor: '#A0DE83',
            tabBarInactiveTintColor: '#000',
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            headerShown: false,
            title: 'Profile',
            tabBarIcon: ({focused, color, size}) => (
              <ProfileIcon
                colors={focused ? '#A0DE83' : '#000'}
                width={hp(3.8)}
                height={hp(3.8)}
              />
            ),
            tabBarLabelStyle: {
              fontSize: hp(1.6),
              paddingBottom: hp(0.5),
            },

            tabBarActiveTintColor: '#A0DE83',
            tabBarInactiveTintColor: '#000',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
