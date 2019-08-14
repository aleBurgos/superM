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
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import SearchFilter from './src/components/search-filter/SearchFilter';
import {Searchbar} from './src/components/search-bar/Searchbar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Basket} from './src/components/basket';
import {Provider} from 'react-redux';
import {store} from './src/state/store';

const MainScreen = () => {
  return (

        <Fragment>
          <View style={[styles.app]}>
            <SearchFilter/>
          </View>
        </Fragment>
  );
};

const MainNavigator = createStackNavigator({
  App: {
    screen: MainScreen,
  },
}, {
  defaultNavigationOptions: {
    headerTitle: <Searchbar/>,
    // headerLeft: <Icon name="" />,
    // headerRight: <View style={{justifyContent:'center', alignItems:'center'}}>
    //   <Icon name="shopping-cart" size={22} allowFontScaling light />
    // </View>
  },
});

const AppNavigator = createDrawerNavigator(
    {
      Main: MainNavigator,
    },
    {
      drawerPosition: 'right',
      contentComponent: (props) => { return <Basket/>;},
    },
);
const AppContainer =  createAppContainer(AppNavigator);
//export default from './storybook';
// export default App;
export default () => {
  return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
  );
};
