import React from 'react';
import { View, ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import  ProductItem from './ProductItem';
import products from '../../_shared/mocks/products';

const item = products[0];

storiesOf('Product Item', module)
  .add('default ', () => {
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <ProductItem item={item} />
      </View>

    );
  })
.add('default with promo ', () => {
  return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <ProductItem item={{...item, promo:'30% 2da pieza'}} />
      </View>

  );
})
.add('list of ', () => {
  return (
      <ScrollView >
        {products.map((item)=>{
          return  <ProductItem key={item.id} item={item} />
        })}
      </ScrollView>

  );
})
;
