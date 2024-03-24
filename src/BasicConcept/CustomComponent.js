import React from 'react';
import { Text, View } from 'react-native';

// 自定义Greeting组件
const Greeting = (props) => {
    return <Text>Hello, {props.name}!</Text>;
};

// 使用Greeting组件
const Components = () => {
    return (
        <View>
            <Greeting name="Alice" />
            <Greeting name="Bob" />
        </View>
    );
};

export default Components;
