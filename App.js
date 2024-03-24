import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Variables from './src/Variables/Variable';
import Example from './src/BasicComponents/Example';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="variables">
        <Stack.Screen name="variables" component={Variables} />
        <Stack.Screen name="example" component={Example} />
        {/* <Stack.Screen name="basicComponents" component={basicComponents} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
