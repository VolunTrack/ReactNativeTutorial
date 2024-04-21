// 引入React和useState, useEffect钩子函数
import React, { useState, useEffect } from 'react';
// 引入React Native的基础组件
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// https://openweathermap.org/current
// 定义API密钥和基础URL
const API_KEY = '8cde0dda3ffca160afb77c87e543a077';
const CITY_NAME = 'Richmond hill';
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`;


/*
Promise-based 方法
Promise 是一种用于处理异步操作的对象。它代表了一个尚未完成但预期将来会完成的操作的最终结果。
一旦Promise的状态改变（从Pending变为Fulfilled或Rejected），它将携带一个值（成功的结果）或一个原因（错误的原因）。

编程风格：使用 .then() 和 .catch() 方法来处理异步 (Asynchrony) 结果和错误。
这种风格可能会导致所谓的“回调地狱” (在异步编程中，由于多次嵌套回调函数而导致代码变得复杂、难以维护的情况)

错误处理：通过链式调用 .catch() 方法集中处理错误。如果在一个长的Promise链中某个环节忽略了错误处理，错误可能不会被捕获。

可读性：对于较简单的异步操作，使用Promise可以非常直观且容易理解。但在多个异步操作相互依赖时，代码可读性可能下降。

控制流：Promise提供了一些有用的工具，如 Promise.all()，允许并行处理多个异步操作并等待所有操作完成。

----------------------------------------------- 华丽的分割线 -------------------------------------------------

Async/Await 方法

编程风格：async/await是建立在Promise之上的语法糖，允许你以同步的方式编写异步代码。这简化了代码的写法，减少了嵌套。

错误处理：使用传统的try/catch语句处理错误，使得错误处理更加直观，且更易于管理多个错误点。

可读性：async/await使代码看起来更像是同步代码，提高了代码的可读性和维护性，特别是在涉及多个连续异步操作时。

控制流：虽然async/await在处理单个异步操作时非常直观，但在需要并行处理多个异步操作时，可能需要回退到使用Promise API（如Promise.all()）。
使用场景

Summary: 
Promise-based：当你需要更细粒度的错误处理或者处理不直接依赖彼此的多个异步操作时，使用Promise可能更合适。
Async/Await：当你处理的异步操作具有高度顺序性，或者当你想通过减少回调来提高代码的可读性时，async/await是更好的选择。

*/


// 使用Promise-based方法从OpenWeatherMap API获取天气数据
const fetchWeatherData = () => {
  return fetch(BASE_URL)
    // 用 .then() 方法来处理Fulfilled状态的结果
    .then(response => {
    // 在这里，'response' 是一个局部变量，它接收从 fetch 返回的响应对象, 包含了从服务器返回的所有信息，包括状态码、响应头以及响应体

      // 检查响应状态，如果不是成功状态则抛出错误
      if (!response.ok) {
        throw new Error('网络请求失败');
      }
      
      // 使用.json()解析响应体中的JSON数据
      return response.json();
    })
    .then(json => {
      // 返回解析后的数据
      return json;
    })

    // 使用 .catch() 方法来处理Rejected状态的错误
    .catch(error => {
      // 如果请求或解析过程中出错，打印错误信息
      console.error('获取天气数据时出错:', error);
    });
};

/*
// 使用async/await语法从OpenWeatherMap API获取天气数据
const fetchWeatherData = async () => {
  try {
    // 等待fetch请求完成并存储响应
    const response = await fetch(BASE_URL);

    // 检查响应是否成功
    if (!response.ok) {
      throw new Error('网络请求失败');
    }

    // 等待解析JSON响应
    const json = await response.json();

    // 返回我们关心的数据部分，例如每日天气
    return json;
  } catch (error) {
    // 处理请求过程中可能出现的异常
    console.error('获取天气数据时出错:', error);
  }
};
*/

// WeatherApp组件
const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true); // 添加loading状态

  // useEffect钩子被调用以处理组件的副作用
  useEffect(() => {
    // 调用fetchWeatherData函数，它是一个异步操作，用来从API获取天气数据
    fetchWeatherData().then(data => {

      // 当数据成功返回后，使用setWeatherData更新组件状态weatherData
      setWeatherData(data);

      // 同时将loading状态设置为false，表示数据加载完成
      setLoading(false);
    });
  }, []); // 空数组表示这个effect只在组件首次渲染时运行一次，类似于componentDidMount生命周期方法


  // 渲染天气数据或加载中状态
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        weatherData && (
          <View>
            <Text style={styles.text}>城市: {weatherData.name}</Text>
            <Text style={styles.text}>当前温度: {weatherData.main.temp}°C</Text>
            <Text style={styles.text}>天气情况: {weatherData.weather[0].description}</Text>
            <Text style={styles.text}>最高温度: {weatherData.main.temp_max}°C</Text>
            <Text style={styles.text}>最低温度: {weatherData.main.temp_min}°C</Text>
          </View>
        )
      )}
    </View>
  );
};

// 定义样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  }
});

// 导出组件
export default WeatherApp;
