import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

/*
Button：简单的点击组件，用于执行操作，如保存编辑后的用户资料。
Button的onPress属性允许我们定义点击后的行为，如提交数据或导航到其他屏幕。
用法: <Button properties={functions} /> 
*/

export default function ButtonDemo() {

  const Separator = () => <View style={styles.separator} />;
  const [isDisabled, setDisabled] = useState(false);
  // [当前状态的值, 更新状态的函数] = useState(状态的初始值)

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          标题和onPress处理函数是必需的。建议设置accessibilityLabel来帮助使您的应用可由每个人使用。
        </Text>
          {/* 简单的按钮，展示如何处理点击事件 */}
        <Button
          title="Press me!!"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          在每个平台上以看起来标准的方式调整颜色。在iOS上, color属性控制文本的颜色。在Android上, color调整按钮的背景色。
        </Text>
         {/* 带有颜色调整的按钮 */}
        <Button
          title="Press me!!!!!!!"
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
          disabled={isDisabled}
          onPress={() => setDisabled(true)}
        />
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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
