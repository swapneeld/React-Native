import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from 'greetingspoc'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Simple App connected to App center........!</Text>
        <Greeting name='Rexxar' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});