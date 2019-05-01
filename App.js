/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
      let pic = {uri: 'https://github.com/SuperBigBang/TestReactNativeApp4NorNick/blob/master/resources/localTestResources/april.png?raw=true'};
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>Доброе утро!</Text>
          <Text style={styles.date}>01.04.2019</Text>
          <Image source={pic} style={styles.image}/>
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
    date: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    image: {
        width: 150,
        height: 150,
        margin: 5
    }
});
