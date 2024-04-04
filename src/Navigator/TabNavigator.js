import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

// 第一个标签页组件
function TabOne() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab One</Text> 
    </View>
  );
}

// 第二个标签页组件
function TabTwo() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab Two</Text> 
    </View>
  );
}

const Tab = createBottomTabNavigator();

// 配置底部标签导航器和页面
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabOne" component={TabOne} />
      <Tab.Screen name="TabTwo" component={TabTwo} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
