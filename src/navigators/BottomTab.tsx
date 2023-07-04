import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeIcon from '../../assets/svg-components/home-icon';
import NewRelease from '../../assets/svg-components/new-release';
import Downloads from '../../assets/svg-components/download-icon';
import Spred from '../../assets/svg-components/spred';

import Homepage from '../screens/Homepage/Homepage';
import Download from '../screens/Download/Download';

const BottomTab = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="HOME"
        component={Homepage}
        options={{
          tabBarIcon: ({ focused, color, size }) => <HomeIcon />,
        }}
      />
      <Tabs.Screen
        name="NEW RELEASE"
        component={Download}
        options={{
          tabBarIcon: ({ focused, color, size }) => <NewRelease />,
        }}
      />
      <Tabs.Screen
        name="DOWNLOADS"
        component={Download}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Downloads />,
        }}
      />

      <Tabs.Screen
        name="SPRED"
        component={Download}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Spred />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
