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

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Context">
        <Stack.Screen name="ButtonDemo" component={ButtonDemo} />
        <Stack.Screen name="TouchablesDemo" component={TouchablesDemo} />
        <Stack.Screen name="ScrollViewDemo" component={ScrollViewDemo} />
        <Stack.Screen name="FlatListDemo" component={FlatListDemo} />

        <Stack.Screen name="StackNavigator" component={StackNavigator} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="Context" component={Context} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
