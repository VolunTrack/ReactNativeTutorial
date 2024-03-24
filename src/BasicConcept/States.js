import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const States = () => {
    const [text, setText] = useState('');

    return (
        <View>
            <TextInput
                value={text}
                onChangeText={newText => setText(newText)}
                placeholder="Type here..."
            />
            <Text>You typed: {text}</Text>
        </View>
    );
};

export default States;