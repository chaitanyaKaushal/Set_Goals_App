import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList, Alert } from 'react-native';
import GoalItem from './components/GoalItem';
import Input from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);

  const cancelButton = () => {
    setIsListVisible(false);
  }

  const goalHandle = (props) => {
    let exitReason = 0;
    courseGoals.map(course => {
      const { id, goal } = course;
      if (goal === props) {
        alert(`This goal has already been setup!`);
        exitReason = 1;
      }
    })
    if (exitReason === 0) {
      setCourseGoals([...courseGoals, {
        id: new Date().getTime().
          toString(), goal: props
      }])
      setIsListVisible(!isListVisible);
    }
  }

  const deleteItem = (id) => {
    let printedName = '';
    setCourseGoals(courseGoals.filter(goal => {
      if (goal.id === id) {
        printedName = goal.goal;
      }
      return(
        goal.id !== id
      );
    }))
    alert(`Congrats on completing your goal: ${printedName}`);
  }
  return (
    // <ScrollView>
    <View style={styles.mainScreen}>
      {/* default of alignItems is stretch along the cross axis */}
      {/* alignContent manages space issues along cross axis */}
      <Button title="Add New Goals" onPress={() => setIsListVisible(true)} color="#6495ed" />
      <Input visible={isListVisible} goalHandle={goalHandle} cancelButton={cancelButton}/>
      <FlatList
        data={courseGoals} // must be an array
        renderItem={itemData =>
          <GoalItem
            title={itemData.item.goal}
            onPressEvent={() => deleteItem(itemData.item.id)}
          />}
      />

    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainScreen: { padding: 50 },
});