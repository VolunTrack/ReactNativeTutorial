import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';

// 第一个抽屉页面
function DrawerOne() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Drawer One</Text> 
    </View>
  );
}

// 第二个抽屉页面
function DrawerTwo() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Drawer Two</Text> 
    </View>
  );
}

const Drawer = createDrawerNavigator();

// 配置抽屉导航器和页面
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerOne" component={DrawerOne} />
      <Drawer.Screen name="DrawerTwo" component={DrawerTwo} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
