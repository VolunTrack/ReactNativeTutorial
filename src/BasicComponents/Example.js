import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet } from 'react-native';

const Example = () => {
    const [text, setText] = useState('');

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <Text style={styles.header}>React Native Showcase</Text>

                {/* Image Component */}
                <Image
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                    style={styles.logo}
                />

                {/* TextInput Component */}
                <TextInput
                    style={styles.input}
                    placeholder="Type here..."
                    onChangeText={setText}
                    value={text}
                />

                {/* Display Typed Text */}
                <Text style={styles.typedText}>You typed: {text}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    typedText: {
        marginTop: 10,
        fontSize: 16,
    },
});

export default Example;
