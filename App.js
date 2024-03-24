import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Variables from './src/Variables/Variable';
import Example from './src/BasicComponents/Example';
import Image from './src/BasicComponents/Image';
import Text from './src/BasicComponents/Text';
import View from './src/BasicComponents/View';
import TextInput from './src/BasicComponents/TextInput';
import CustomComponent from './src/BasicConcept/CustomComponent';
import States from './src/BasicConcept/States';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="state">
        <Stack.Screen name="variables" component={Variables} />
        <Stack.Screen name="example" component={Example} />
        <Stack.Screen name="image" component={Image} />
        <Stack.Screen name="text" component={Text} />
        <Stack.Screen name="view" component={View} />
        <Stack.Screen name="textInput" component={TextInput} />
        <Stack.Screen name="customComponent" component={CustomComponent} />
        <Stack.Screen name="state" component={States} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
