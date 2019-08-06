import React, {PureComponent} from 'react';
import {View,Text} from 'react-native';
import styles from './Button.less';

export class Button extends PureComponent {
  render(){
    return (<View style={styles.button}>
      <Text style={styles.button__text}>+</Text>
    </View>);
  }
}