import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// 创建一个Context
const UserContext = React.createContext();

// 应用的根组件
function ContextDemo() {
  const [user, setUser] = useState(null); // 使用useState管理用户登录状态

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <View style={styles.container}>
        {user ? <WelcomeScreen /> : <LoginScreen />}
      </View>
    </UserContext.Provider>
  );
}

// 登录屏幕
function LoginScreen() {
  const { setUser } = useContext(UserContext); // 从Context获取setUser

  return (
    <View>
      <Text style={styles.text}>请登录</Text>
      <Button title="登录" onPress={() => setUser('React Native 学生')} />
    </View>
  );
}

// 欢迎屏幕
function WelcomeScreen() {
  const { user, setUser } = useContext(UserContext); // 从Context获取user和setUser

  return (
    <View>
      <Text style={styles.text}>欢迎, {user}</Text>
      <Button title="注销" onPress={() => setUser(null)} />
    </View>
  );
}

// 样式定义
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default ContextDemo;

// Props:

// 优点是简单直观，特别适用于父子组件直接通信的情况。
// 缺点是当需要在多层嵌套的组件之间传递数据时，代码会变得复杂且难以维护，这种情况下每层组件都需要向下传递 props。

// Context:

// 优点是可以跨越组件层级直接传递数据，避免了"props drilling"（即逐层传递 props 的问题），使得组件树的数据传递更为清晰和简洁。
// 缺点是在小规模项目或简单的组件结构中可能会稍显繁琐，并且不当的使用可能会使得组件的复用性变差。
