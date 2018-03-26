import React, { Component } from 'react';
import Analytics from 'appcenter-analytics';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
      super(props);
      
      this.state = {
        counter: 0
      }
      Analytics.isEnabled()
        .then(async (isAnalyticsEnabled) => {
          if (isAnalyticsEnabled == false)
            await Analytics.setEnabled(true);
        });

        this.onCounterIncrease = this.onCounterIncrease.bind(this);
    }

    onCounterIncrease() {
      Analytics.trackEvent("Counter Increased", 
      {
        "Category": "Button Press",
      });

      this.setState((previousState, props) => ({
        counter: previousState.counter + 1
      }));
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          ESXP Shell
        </Text>
        <Text style={styles.instructions}>
          This is the shell application, your upload will be added here. HMR is also possible by following the below instructions.
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        
        <TouchableOpacity onPress={this.onCounterIncrease}>
          <Text>Increase Counter</Text>
        </TouchableOpacity>
        <Text style={styles.container}>
          Counter: {this.state.counter}
        </Text>
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
