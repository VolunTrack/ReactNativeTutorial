import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Variables() {

  // 使用 let 声明局部变量
  let age = 25;
  age = 26; // 正确，因为 let 允许重新赋值

  // 使用 const 声明常量
  const name = "John";
  // name = "Doe"; // 错误，因为 const 声明的是常量，不能重新赋值

  // 基本类型示例
  let isTrue = false; // Boolean
  let count = 42; // Number
  let text = "Hello, world!"; // String

  // 引用类型示例
  let person = {
    firstName: "John",
    lastName: "Doe"
  };
  let numbers = [1, 2, 3, 4, 5]; // 数组也是对象

  // 修改引用类型
  let person2 = person;
  person2.firstName = "Jane";
  console.log(person.firstName); // 输出 "Jane"，因为 person 和 person2 引用的是同一个对象


  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>{age}</Text>
      <Text>{numbers}</Text>
      <Text>{person.firstName}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
