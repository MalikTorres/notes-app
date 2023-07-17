import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// View -> container that will wrap multiple components together
// text - to showcase any text
// textinput -> component
// button -> showcase any button

export default function App() {

  // function handleOnChangeText(getEnteredText) {
  //   console.log(getEnteredText)
  // }

  // function handleOnPressButton() {

  // }
  //onChangeText={handleOnChangeText}
  //onPress={handleOnPressButton}
  return (
    <View style={{
      padding: 60
    }}>
      {/* to render input along with button */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Add your Note Here' />
        <Button style={styles.button} title='Add Note' />
      </View>
      {/* to render input along with button */}
      {/* to render all the notes we created */}
      <View style={styles.listContainer}>
        <Text>Show Lists Here !</Text>
      </View>

      {/* to render all the notes we created */}
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    paddingBottom: 30,
    boredrBottomWidth: 1
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1
  },
  listContainer: {
    paddingTop: 30
  }
});
