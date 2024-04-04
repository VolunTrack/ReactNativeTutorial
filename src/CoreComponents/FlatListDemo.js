import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

// 准备展示的数据数组
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

// FlatList项目渲染组件
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function FlatListDemo() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA} // 数据源
        renderItem={({item}) => <Item title={item.title} />} // 如何渲染每一项
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
