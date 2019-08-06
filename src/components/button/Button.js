import React, {PureComponent} from 'react';
import {View, TouchableWithoutFeedback,Text} from 'react-native';
import styles from './Button.less';

export class Button extends PureComponent {

  constructor(){
    super();
    this.state = {pressing: false};
  }

  onPress = ()=>{
    this.setState({pressing: !this.state.pressing});
  };

  render(){
    const {text, onPress} = this.props;
    const {pressing} = this.state;

    return (<TouchableWithoutFeedback onPress={onPress} onPressIn={this.onPress} onPressOut={this.onPress}>
      <View style={[styles.button, pressing? styles['button--pressing']:{}]}>
        <Text style={styles.button__text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>);
  }
}