/**
 * Sample React Native MainActivity
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {colors, metrics} from "./utils/themes";
import {
    getDataFromNetworkAPI,
    getDateTextFromModel,
    getImageFromModel,
    getWelcomeTextFromModel
} from "./controller/MainActivityController";

let context;
type Props = {};
export default class MainActivity extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {isLoading: true};
        context = this;
    }

    componentDidMount() {
        getDataFromNetworkAPI()
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

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

function changeState() {
    context.setState({isLoading: false});
}

export {changeState}

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
