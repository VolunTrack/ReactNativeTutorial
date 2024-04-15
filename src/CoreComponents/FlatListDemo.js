import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

/*
FlatList: 是展示大量数据列表的关键组件。
提供了高效的滚动性能，支持懒加载和下拉刷新，对于显示用户的动态、朋友列表等功能非常适用。

用法: 

数据数组，每个对象至少包含一个唯一id和展示内容。
const DATA = [
  { id: '1', title: 'First Item' },
  { id: '2', title: 'Second Item' },
  ...
]; 

自定义组件，用于渲染每一项数据 (每一项数据都会按照这个格式)。
/          Item 的 props (需要用到的数据)
/                  ↓
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
); 

return (
  <FlatList
    // 数据源，提供给列表的数据数组。  
    data={DATA} 

    // 渲染函数，用于定义如何渲染每一项数据。接受的参数是一个对象，包含了列表中的每个数据项。
    renderItem={({ item }) => <Item title={item.title} />} 

    // 关键提取器，用于为给定的item生成一个唯一的字符串key。在列表中每一项都需要一个唯一的key属性。
    keyExtractor={item => item.id} 
  />
)

*/

// 准备展示的数据数组
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    content: '123',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    content: '2976573424923',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    content: '1232534536',
  },
];

// FlatList项目渲染组件, 通过一个一个View加上text来展示每一项data
const Item = ({title, content}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>{content}</Text>

  </View>
);

export default function FlatListDemo() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA} // 数据源
        renderItem={({item}) => <Item title={item.title} content={item.content}/> } // 如何渲染每一项
        keyExtractor={item => item.id} // 每一项的key值
      />
    </SafeAreaView>
  );
};

// 样式定义
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // 容器顶部距离
  },
  item: {
    backgroundColor: '#f9c2ff', // 项目背景颜色
    padding: 20, // 内边距
    marginVertical: 8, // 垂直外边距
    marginHorizontal: 16, // 水平外边距
  },
  title: {
    fontSize: 32, // 字体大小
  },
});
