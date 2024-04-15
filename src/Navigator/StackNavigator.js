import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text } from 'react-native';


// 通过homescreen的按钮跳转到详情页

// 配置堆栈导航器和页面
const Stack = createStackNavigator();

// user会看到的界面 
function StackNavigator() {
  return (
    <Stack.Navigator>
      {/* 可以使用 initialRouteName, 
      堆栈导航器默认会使用在Stack.Navigator中定义的第一个Stack.Screen作为初始路由 */}
      
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

// 首页组件
//             需要用的naviagtion的功能来实现跳转
//                        ↓
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text> 
      
      {/* 导航按钮，点击时跳转到详情页 */}
      <Button
        title="Go to Details"

        // 通过navigation.navigate来实现导航
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

// 详情页组件
function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text> 
      <Button
        title="Go to Home screen"

        // 通过navigation.navigate来实现导航
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}



export default StackNavigator;
