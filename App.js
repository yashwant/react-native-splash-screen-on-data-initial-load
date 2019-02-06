/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {

      super(props);
      this.state = {
        userData: null
      };

    }
  componentDidMount() {
    // do stuff while splash screen is shown
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'GET', //'POST'
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   "type": "select",
        //   "args": {
        //       "table": "user",
        //       "columns": [
        //           "name"
        //       ],
        //       "limit": "1"
        //   }
        // })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({userData: responseJson});

      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
          {
            this.state.userData ? 
            <Text>Initial Data Loading via Rest API is now finished!</Text> 
            : 
            <Text></Text>
          }
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
});
