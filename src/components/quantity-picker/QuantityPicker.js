import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './QuantityPicker.less';
import {Button} from '../button/Button';

class QuantityPicker extends PureComponent {

  constructor(props) {
    super();
    this.state = {quantity: props.value || 0};
  }

  increaseQuantity = () => {
    const quantity =this.state.quantity + 1;
    this.setState({
      quantity,
    });
    this.onChange(quantity);
  };

  reduceQuantity = () => {
    if (this.state.quantity > 0) {
      const quantity =this.state.quantity - 1;
      this.setState({
        quantity ,
      });

      this.onChange(quantity);
    }
  };

  onChange = (quantity)=>{
    const {onChange} = this.props;
    if(onChange){
      onChange(quantity);
    }
  };

  render = () => {
    const {quantity} = this.state;
    return (<View style={styles.quantity_picker}>
      <Button text="-" onPress={this.reduceQuantity}/>
      <Text>{quantity}</Text>
      <Button text="+" onPress={this.increaseQuantity}/>
    </View>);
  };
}

QuantityPicker.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
};
QuantityPicker.defaultProps = {};
export default QuantityPicker;