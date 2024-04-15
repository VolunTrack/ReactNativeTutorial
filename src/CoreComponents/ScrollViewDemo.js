import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

/*
ScrollView：提供滚动功能，确保内容超出屏幕时用户仍能查看全部信息。
特别是在用户资料较多的情况下，ScrollView确保用户体验的流畅性。

用法 (和View一样): 
<ScrollView properties>
  <Text> 
    balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabala
    balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabala
    balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabala
    balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabala
    balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabala
    ...
  </Text>
</ScrollView>
*/

export default function ScrollViewDemo() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

      {/* 这里是一段很长的文本，ScrollView 组件可以让它在内容超出屏幕时仍然可以滚动查看。 */}
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. 
          Duis aute irure dolor in et dolore magna aliqua. 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          I love VolunTrack
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
