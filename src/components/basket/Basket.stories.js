import React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import {Basket} from './Basket';

storiesOf('Basket', module)
  .add('default color', () => {
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Basket />
      </View>

    );
  })
;
