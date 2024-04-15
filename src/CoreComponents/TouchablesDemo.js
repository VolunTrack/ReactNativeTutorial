import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, TouchableHighlight} from 'react-native';

/*
TouchableOpacity：相比Button，它提供了更高的灵活性和可定制性。
你可以使用它们来构建各种形状和风格的交互元素，并且能够完全控制它们的布局和样式。

用法: 
<TouchableOpacity properties={function}> 
  <Text>
      可以自定义展示内容
  </Text>
  <View>
    <Image> 
  </View>
  <Icon> 
  ...

</TouchableOpacity>

*/

export default function TouchablesDemo() {
  const [count, setCount] = useState(0); // 使用 useState Hook 来追踪用户点击次数
  const onPress = () => setCount(count + 1); // 点击时的处理函数，每次点击都会增加计数

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
      {/* 显示点击次数 */}
        <Text>Count: {count}</Text> 
      </View>
      
      <TouchableOpacity style={styles.button} onPress={onPress}>
         {/* TouchableOpacity 组件，透明触摸，点击时显示反馈 */}

        <Text>TouchableOpacity!!</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
         {/* TouchableHighlight 组件，点击时背景色变化 */}

        <View style={styles.button}>
          <Text>TouchableHighlight!!!!!!</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

// 样式定义
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10, // 容器水平内边距
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD', // 按钮背景颜色
    padding: 10, // 按钮内边距
  },
  countContainer: {
    alignItems: 'center',
    padding: 10, // 计数器容器内边距
  },
});
