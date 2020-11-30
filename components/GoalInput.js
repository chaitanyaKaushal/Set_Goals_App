import React, { useState } from 'react';
import { StyleSheet ,TextInput, View, Button, Modal, Alert,TouchableOpacity,Text } from 'react-native';

const Input = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    
    const inputHandle = (text) => {
        setEnteredGoal(text);
    }

    const addGoalHandle = () => {
        props.goalHandle(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal
            visible={props.visible}
            animationType='slide'
            transparent={false}
            onRequestClose={() => {
                Alert.alert('Modal is closed')
            }}
        >
            <View style={styles.flexParentStyling}>
                <TextInput
                    placeholder='Course Goals'
                    style={styles.input}
                    onChangeText={inputHandle}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style = {styles.btn}>
                        <Button title="ADD" color="#6495ed" onPress={addGoalHandle} />
                    </View>
                    <View style = {styles.btn}>
                        <Button title="CANCEL" color="#8b0000" onPress={props.cancelButton.bind(this)} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({

    input: { borderColor: '#d2691e', borderWidth: 1, width: "80%", padding: 10, margin : 10 },

    flexParentStyling: {
        flex : 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'space-between'
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width : '60%'
    },

    btn: {
        width: '40%'
    }
})

export default Input;