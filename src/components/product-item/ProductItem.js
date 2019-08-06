import React, {PureComponent} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
// import Image from 'react-native-fast-image';
import styles from './ProductItem.less';
import {Button} from '../button/Button';
import QuantityPicker from '../quantity-picker/QuantityPicker';
import PropTypes from 'prop-types';

let timeout = null;

class ProductItem extends PureComponent {
  constructor() {
    super();
    this.state = {adding: false, quantity: 0};
  }

  updateQuantity = (quantity) => {
    this.setState({quantity});
    this.updateAdding();
  };

  updateAdding = () => {
    this.setState({adding: true});
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      this.setState({adding: false});
    }, 3000);
  };

  renderAddPanel = () => {
    const {quantity} = this.state;
    return (<View style={styles.product_item__actions__add}>
      <QuantityPicker value={quantity} onChange={this.updateQuantity}/>
    </View>);
  };

  renderQuantityOrButton = () => {
    const {quantity} = this.state;
    if (quantity > 0) {
      return <TouchableOpacity onPress={this.updateAdding}><Text
          style={styles.pi_info__quantity}>{quantity}</Text></TouchableOpacity>;
    }
    return (<Button text="+" onPress={this.updateAdding}/>);
  };

  renderPrice = () => {
    const {quantity} = this.state;
    const {item} = this.props;
    const subTotal = <Text> x <Text style={styles.pi_info__total}>{quantity}</Text> =
      <Text style={styles.pi_info__price}> ${(item.priceTotal * quantity).toFixed(2)}</Text></Text>
    return <Text >${item.priceTotal}{quantity>0 && subTotal} </Text>;
  };

  render() {
    const {adding} = this.state;
    const {item} = this.props;

    return (<View style={styles.product_item}>
      <View style={styles.product_item__img}>
        <Image source={{
          uri: item.imageSmall,
        }} style={{flex:1}}/>
      </View>
      <View style={styles.product_item__info}>
        <Text style={styles.pi_info__title}>{item.description}</Text>
        <Text style={styles.pi_info__unit}>${item.priceByUnit} x {item.priceUnit}</Text>
        {item.promo && <Text style={styles.pi_info__promo}>{item.promo}</Text>}
        {this.renderPrice()}
      </View>

      <View style={styles.product_item__actions}>
        {!adding && this.renderQuantityOrButton()}
      </View>

      {adding && this.renderAddPanel()}
    </View>);
  }
}

ProductItem.propTypes = {
  item: PropTypes.object
};
ProductItem.defaultProps = {};
export default ProductItem;