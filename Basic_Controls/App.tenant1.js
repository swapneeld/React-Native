import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import codePush from 'react-native-code-push';

let codePushOptions = { 
  checkFrequency: codePush.CheckFrequency.MANUAL //Make it manual when the check needs to be made only by clicking the button
}

export default class App extends React.Component {
  onButtonPressTenant1() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
      deploymentKey: 'PQIwZqRp2gp0rQKiJAo0fuVa0TM3BJ5-7LG5f'
    });
  }
  onButtonPressTenant2() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
      deploymentKey: '1uPTdk2pQAblXlzZ9Fqu3OK3Wp2UrkPzXIf9G'
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Customized App for Tenant 1</Text>
        <TouchableOpacity onPress={this.onButtonPressTenant1}>
          <Text>Tenant 1 Update</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onButtonPressTenant2}>
          <Text>Tenant 2 Update</Text>
        </TouchableOpacity>
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

App = codePush(codePushOptions)(App);