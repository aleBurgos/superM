import React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import QuantityPicker from './QuantityPicker';

storiesOf('QuantityPicker', module)
  .add('default color', () => {
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <QuantityPicker />
      </View>

    );
  })
;
