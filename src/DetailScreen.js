import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const API_KEY = '8cde0dda3ffca160afb77c87e543a077';

function fetchWeatherData (city) {
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    return fetch(BASE_URL)
    .then(response => {
        if (!response.ok){
            throw new Error('error');
        }

        return response.json();
    })
    .catch(error => {
        console.error('错误', error);
    });
};

function DetailScreen( {route} ){
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true); // 添加loading状态
    const {city} = route.params; 

    useEffect(() => {
        fetchWeatherData(city).then(data =>{
            setWeatherData(data);
            setLoading(false);
        });
    }, [city])

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                weatherData && (
                    <View>
                        <Text style={styles.title}>
                            城市: {city}
                        </Text>
                        <Text style={styles.text}>
                            Temp: {weatherData.main.temp}°C
                        </Text>
                        <Text style={styles.text}>
                            天气情况: {weatherData.weather[0].description}
                        </Text>
                    </View>
                )
            )
            
            }
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1, // 容器使用flex布局填满整个屏幕
        justifyContent: 'center', // 垂直居中
        alignItems: 'center', // 水平居中
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    text:{
        fontSize: 16,
        color: 'red',
    }
});

export default DetailScreen;