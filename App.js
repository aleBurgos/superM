/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import styles from './App.less';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


const App = () => {
  return (
    <Fragment >
      <View style={[styles.app,{backgroundColor:styles.grey}]}>
        <Text>working on!</Text>
      </View>
    </Fragment>
  );
};

const TabNavigator = createBottomTabNavigator({
  Home: App,
});

export default createAppContainer(TabNavigator);

// export default App;
