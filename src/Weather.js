import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const API_KEY = '8cde0dda3ffca160afb77c87e543a077';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Home Screen
function HomeScreen({ navigation }) {
  const cities = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney'];
  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate('Details', { city: item })}>
            <Text style={styles.title}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// Details Screen
function DetailsScreen({ route }) {
  const { city } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [city]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text style={styles.title}>{city}</Text>
          <Text>Temperature: {data.main?.temp} °C</Text>
          <Text>Weather: {data.weather[0]?.description}</Text>
        </View>
      )}
    </View>
  );
}


// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
  },
  title: {
    fontSize: 24,
  }
});

export default HomeScreen;
