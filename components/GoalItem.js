import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPressEvent}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#ccc',
        borderWidth: 5,
        borderColor : 'black'
    }
})

export default GoalItem;