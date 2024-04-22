import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

function HomeScreen({ navigation }){
    const cities = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney', 'Toronto'];

    return(
        <View styles={styles.container}>
            <FlatList
                data={cities}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        style={styles.list} 
                        onPress={() => navigation.navigate('DetailScreen', {city: item})}
                    >
                        <Text style={styles.text}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    list: {
        padding: 20,
        backgroundColor: 'pink',
        marginVertical: 10,
    },
    text:{
        fontSize: 20,
    }
})

export default HomeScreen; 