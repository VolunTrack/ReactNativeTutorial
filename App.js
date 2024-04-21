import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FetchExample from './src/FetchExample';
import StyleExample from './src/StylesExample';
import Weather from './src/Weather';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Weather">

        <Stack.Screen name="FetchExample" component={FetchExample} />
        <Stack.Screen name="StyleExample" component={StyleExample} />
        <Stack.Screen name="Weather" component={Weather} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
