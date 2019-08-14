import React, {PureComponent} from 'react';
import {View, TextInput} from 'react-native';
import styles from './Searchbar.less';

export class Searchbar extends PureComponent {

  constructor(){
    super();
    this.state = {pressing: false};
  }
  render(){
    return (<View style={styles.search_bar}><TextInput  /></View>);
  }
}