import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

export default function ButtonDemo() {

  // 分隔符组件，用于在视觉上分隔不同的按钮示例
  const Separator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          标题和onPress处理函数是必需的。建议设置accessibilityLabel来帮助使您的应用可由每个人使用。
        </Text>
          {/* 简单的按钮，展示如何处理点击事件 */}
        <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          在每个平台上以看起来标准的方式调整颜色。在iOS上，color属性控制文本的颜色。在Android上，color调整按钮的背景色。
        </Text>
         {/* 带有颜色调整的按钮 */}
        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          所有针对组件的交互都被禁用了。
        </Text>
        {/* 被禁用的按钮，无法进行交互 */}
        <Button
          title="Press me"
          disabled
          onPress={() => Alert.alert('Cannot press this one')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          这种布局策略让标题定义按钮的宽度。
        </Text>
         {/* 水平方向上并排放置的两个按钮 */}
        <View style={styles.fixToText}>
          <Button
            title="Left button"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="Right button"
            onPress={() => Alert.alert('Right button pressed')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// 样式定义
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
