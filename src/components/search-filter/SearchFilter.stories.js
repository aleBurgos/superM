import React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import {SearchFilter} from './SearchFilter';

storiesOf('SearchFilter', module)
  .add('default', () => {
    return (
      <View style={{ marginTop:56 }}>
        <SearchFilter onCategorySelected={console.log} />
      </View>

    );
  })
;
