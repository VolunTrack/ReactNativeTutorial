import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FetchExample from './src/FetchExample';
import StyleExample from './src/StylesExample';
import HomeScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">

        <Stack.Screen name="FetchExample" component={FetchExample} />
        <Stack.Screen name="StyleExample" component={StyleExample} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
