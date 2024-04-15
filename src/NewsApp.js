import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';




// 新闻列表界面

const NEWS_DATA = [
    {id: '1', title: 'RHHS', data: 'April 6', content: 'Hello World'},
    {id: '2', title: 'Canada', data: 'Feb 32', conten: 'No homework'},

];

const NewsItem = ({item}) =>{
    const onPressItem = () => {
        Alert.alert("点击新闻", `你点击了 ${item.title} \n内容: ${item.content}`);
    };
    
    return(
        <TouchableOpacity style={styles.item} onPress={onPressItem}>
            <Text>
                {item.title}
            </Text>
        </TouchableOpacity>
    );
};

const NewsStack = () =>{
    return(
        <View>
            <FlatList
                data={NEWS_DATA}
                renderItem={({item}) => <NewsItem item={item}/>}
                keyExtractor={item => item.id}
            />
        </View>
    );
};


// 收藏界面

const FavoritesScreen = () => {
    return(
        <View> 
            <Text>
                您的收藏
            </Text>
        </View>
    );
};

const Tab = createBottomTabNavigator();

// 配置底部标签导航器和页面
function NewsAppScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="NewsStack" component={NewsStack} />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

export default NewsAppScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 0,
    },
    item:{
        backgroundColor: 'pink',
        padding: 20,
        marginVertile: 10,

    },
    touchable:{
        color: 'blue',
    },
});

