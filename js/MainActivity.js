/**
 * Sample React Native MainActivity
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {colors, metrics} from "./utils/themes";
import {
    getDataFromNetworkAPI,
    getDateTextFromModel,
    getImageFromModel,
    getWelcomeTextFromModel
} from "./controller/MainActivityController";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class MainActivity extends Component<Props> {
  render() {
      getDataFromNetworkAPI();
    return (
      <View style={styles.container}>
          <View style={styles.containerText}>
              <Text style={styles.welcome}>{getWelcomeTextFromModel()}</Text>
              <Text style={styles.date}>{getDateTextFromModel()}</Text>
          </View>
          <View style={styles.containerImage}>
              <Image source={{uri: getImageFromModel().imagePath}}
                     style={{width: getImageFromModel().imageWidth, height: getImageFromModel().imageHeight}}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    containerText: {
        flex: 1,
        justifyContent: 'flex-start',
    alignItems: 'center',
        backgroundColor: colors.background,
  },
  welcome: {
      fontSize: metrics.textHeaders,
    textAlign: 'center',
    margin: 10,
      color: colors.text,
      fontWeight: 'bold'
  },
    date: {
    textAlign: 'center',
        color: colors.textSecondary,
    marginBottom: 5,
        fontSize: metrics.textSize
  },
    containerImage: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.background,
    }
});
