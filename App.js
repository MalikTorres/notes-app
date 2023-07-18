import React, { useState } from 'react';
import ApiCall from './components/apicall';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Pressable, Vibration } from 'react-native';
// View -> container that will wrap multiple components together
// text - to showcase any text
// textinput -> component
// button -> showcase any button

export default function App() {

  const [value, setValue] = useState('');
  const [listOfNotes, setListOfNotes] = useState([]);

  function handleOnChangeText(getEnteredText) {
    setValue(getEnteredText);
  }

  function handleOnPressButton() {

    setListOfNotes(currentNotes => [...currentNotes, value]);
  }

  function handleRemoveItem(getCurrentIndex) {
    console.log('item pressed here');
    let copyListOfNotes = [...listOfNotes]

    copyListOfNotes = copyListOfNotes.filter((_, index) => getCurrentIndex !== index);
    setListOfNotes(copyListOfNotes);
    setValue('');
  }

  console.log(listOfNotes);
  return (
    <View style={{
      padding: 60,
      paddingHorizontal: 15,
      flex: 1,
      backgroundColor: 'beige'
    }}

    >
      {/* to render input along with button */}
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleOnChangeText}
          style={styles.input}
          placeholder='Add your Note Here!'
          value={value}
        />
        <Button styles={styles.button} onPress={handleOnPressButton} title='Add Note' />
      </View>
      {/* to render input along with button */}
      {/* to render all the notes we created */}
      <View style={styles.listContainer}>
        <FlatList
          data={listOfNotes}
          renderItem={(itemData) => (
            <Pressable   onPress={() => handleRemoveItem(itemData.index)}>
              <Text style={styles.listItem}> {itemData.item}</Text>
            </Pressable>
          )}
        />
      </View>

      {/* to render all the notes we created */}

      {/* Out Api component */}
      <View style={styles.apiContainer}>
        <ApiCall />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    paddingBottom: 30,
    borederBottomWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    padding: 10

  },
  listContainer: {
    paddingTop: 30,
    flex: 1,

  },
  listItem: {
    borderRadius: 1,
    borderColor: 'red',
    backgroundColor: 'salmon',
    padding: 20,
    paddingbottom: 20,
    marginBottom: 20,
    color: '#fff',
    fontSize: 20
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    //elevation: 3,
    backgroundColor: 'black',
  },
  apiContainer: {
    flex: 2,
  }
});
