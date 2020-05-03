import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ExploreScreen,
  MessagesScreen,
  SavedScreen,
  ProfileScreen,
} from '../screens';
import MyGradientTabBar from './MyGradientTabBar';

const Tab = createBottomTabNavigator();

//React navigation bottom navigator doesn't support a gradient background by default.
//Therefore a custom TabBar (i.e MyGradientTabBar) component was needed.

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <MyGradientTabBar {...props} />}
      initialRouteName={'Explore'}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
