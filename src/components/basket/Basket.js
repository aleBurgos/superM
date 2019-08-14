import React, {PureComponent} from 'react';
import {Text, ScrollView, View} from 'react-native';
import styles from './Basket.less';
import ProductItem from '../product-item/ProductItem';
import products from '../../_shared/mocks/products';

export class Basket extends PureComponent {

  constructor(){
    super();
  }

  render(){
    return (<View>
      <View style={styles.basket__header}>
        <Text>TOTAL</Text>
        <View style={styles.button}></View>
      </View>
      <ScrollView >
        {products.map((item)=>{
          return  <ProductItem key={item.id} item={item} />
        })}
      </ScrollView>
      <View style={styles.basket__header}></View>
    </View>);
  }
}