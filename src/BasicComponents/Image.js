import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const App = () => (
    <View style={styles.container}>
        <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={{ width: 200, height: 200 }}
        />
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
