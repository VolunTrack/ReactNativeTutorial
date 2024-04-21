// 引入React及相关组件
import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

// 获取设备屏幕的宽度和高度
const { width, height } = Dimensions.get('window');
//123
// 定义样式
const styles = StyleSheet.create({
  container: {
    flex: 1, // 容器使用flex布局填满整个屏幕
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    backgroundColor: 'pink', // 背景色为浅灰
  },
  header: {
    fontSize: 24, // 主标题字体大小
    color: '#333', // 主标题字体颜色为深灰
    fontWeight: 'bold', // 字体加粗
    marginBottom: 10, // 与下一个元素的间隔
    padding: 10,
    // padding 控制组件内容与其边界之间的空间；margin 控制组件与其他组件之间的空间
  },
  subHeader: {
    fontSize: 18, // 副标题字体大小
    color: '#666', // 副标题字体颜色为中灰
    marginBottom: 20, // 与下一个元素的间隔
  },
  responsiveBox: {
    width: width * 0.8, // 宽度占屏幕宽度的80%
    height: height * 0.2, // 高度占屏幕高度的20%
    backgroundColor: '#4CAF50', // 背景颜色为绿色
    justifyContent: 'center', // 内部元素垂直居中
    alignItems: 'center', // 内部元素水平居中
    marginBottom: 20, 
    borderRadius: 5, // 边框圆角

    // 阴影
    // android: 
    elevation: 8, // Automatically applies a shadow

    // iOS: 
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 }, // 阴影位置
    shadowOpacity: 0.8, // 透明度
    shadowRadius: 6, // 边框圆角
  },
  responsiveText: {
    color: '#fff', // 文本颜色为白色
    fontSize: 16, // 文本字体大小
  },
  horiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // 子项平均分布
    alignItems: 'center',
    width: '100%', // 容器宽度占满父视图的100%
    backgroundColor: 'lightblue',
    paddingVertical: 20, // 垂直方向的内边距
  },
  item: {
    width: '30%', // 每个元素占容器宽度的30%
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

// 定义组件
const StyleExampleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>StyleSheet 示例</Text>
      <Text style={styles.subHeader}>响应式设计展示</Text>
      <View style={styles.responsiveBox}>
        <Text style={styles.responsiveText}>这是一个响应式盒子</Text>
      </View>
      <View style={styles.horiContainer}>
        <View style={styles.item}>
          <Text style={styles.text}>Item 1</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Item 2</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Item 3</Text>
        </View>
      </View>
    </View>
  );
};

// 导出组件
export default StyleExampleScreen;
