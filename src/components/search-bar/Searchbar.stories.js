import React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import {Searchbar} from './Searchbar';

storiesOf('Button', module)
  .add('default color', () => {
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Searchbar  />
      </View>

    );
  })
;
