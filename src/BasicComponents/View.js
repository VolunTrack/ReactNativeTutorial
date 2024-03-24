import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => (
    <View style={styles.container}>
        {/* 其他组件将放在这里 */}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
