import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AdSupportIOS,
  TouchableOpacity
} from 'react-native';
import codePush from 'react-native-code-push';

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.MANUAL
};

type Props = {};
class App extends Component<Props> {

  constructor(props) {
    super(props);

    this.updateESApp = this.updateESApp.bind(this);
    this.updateFnApp = this.updateFnApp.bind(this);
  }

  updateESApp(){
    codePush.sync({
      deploymentKey: "JPa1TiSMOpksAzb31PCjNZnbUJSkS1pKe2A5M"
    })
  }

  updateFnApp(){
    codePush.sync({
      deploymentKey: "PZN5el703IvseLnTgAHgn5nayHPnBkv5ehCcz"
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Mobile Platform (Multitenancy)
        </Text>

        <TouchableOpacity onPress={this.updateESApp}>
          <Text>Enterprise Services Mobile Experience</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.updateFnApp}>
          <Text>Finance Mobile Experience</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

App = codePush(codePushOptions)(App);
export default App;