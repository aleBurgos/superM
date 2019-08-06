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
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';


const App = () => {
  return (
    <Fragment >
      <View style={[styles.app]}>
        <Text>working on!</Text>
      </View>
    </Fragment>
  );
};



const MainNavigator = createStackNavigator({
  App: {
    screen: App
  }
});


const AppNavigator =  createDrawerNavigator(
    {
      Main: MainNavigator,
    },
    {

    }
);
// export default createAppContainer(AppNavigator);
export default from './storybook';
// export default App;
