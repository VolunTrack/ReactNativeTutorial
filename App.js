import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TouchablesDemo from './src/CoreComponents/TouchablesDemo';
import ButtonDemo from './src/CoreComponents/ButtonDemo';
import ScrollViewDemo from './src/CoreComponents/ScrollViewDemo';
import FlatListDemo from './src/CoreComponents/FlatListDemo';
import StackNavigator from './src/Navigator/StackNavigator';
import TabNavigator from './src/Navigator/TabNavigator';
import DrawerNavigator from './src/Navigator/DrawerNavigator';
import Context from './src/Navigator/Context';
import NewsAppScreen from './src/NewsApp';

const Stack = createStackNavigator();

// App.js 设置和管理了应用的导航整个应用的导航结构，允许用户在不同的演示组件和导航示例之间自由切换。

function App() {
  return (
    <NavigationContainer>
    {/* NavigationContainer包裹根导航组件，启动导航功能 */}

      <Stack.Navigator initialRouteName="NewsApp">

      {/* Stack.Navigator定义了一个导航堆栈，initialRouteName指定了初始页面为"Context" */}
        
        {/* 
          下面的Stack.Screen定义了堆栈中的各个页面 
          name属性定义了路由的名称，而component属性则指定了当导航到该路由时应该渲染的组件。
        */}
        <Stack.Screen name="ButtonDemo" component={ButtonDemo} />
        <Stack.Screen name="TouchablesDemo" component={TouchablesDemo} />
        <Stack.Screen name="ScrollViewDemo" component={ScrollViewDemo} />
        <Stack.Screen name="FlatListDemo" component={FlatListDemo} />

        <Stack.Screen name="StackNavigator" component={StackNavigator} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="Context" component={Context} />

        <Stack.Screen name="NewsApp" component={NewsAppScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
