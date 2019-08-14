// Actions
export const BASKET_ADD_PRODUCT = 'basket/add';
export const BASKET_REMOVE_PRODUCT = 'basket/remove';
export const BASKET_CLEAN = 'basket/clean';

// Actions creators

export const addProduct = (product)=>{
  return {
    type: BASKET_ADD_PRODUCT,
    payload: product
  }
};

export const removeProduct = (product) =>{
  return {
    type: BASKET_REMOVE_PRODUCT,
    payload: product
  }
};

export const cleanBasket = ()=>{
  return {
    type: BASKET_CLEAN,
  }
};

const initialState = {
  products:[],
  total:0,
};

const sum = (products)=>{
  const _products = products.reduce((productA,productB)=>{
    return {priceTotal:productA.priceTotal + productB.priceTotal }
  });
  return  Math.round(_products.priceTotal * 100) / 100;
};

export const basketReducer = (state = initialState, action )=>{
  switch (action.type){
    case BASKET_ADD_PRODUCT:
      const addProducts = [...state.products, action.payload];
      return Object.assign({},{products: addProducts, total:sum(addProducts)});
      break;
    case BASKET_REMOVE_PRODUCT:
      const removedProducts  = state.products.filter((item)=>{
          if(item.id !== action.payload.id){
            return item;
          }
      });
      return Object.assign({},{products: removedProducts, total: sum(removedProducts)});
      break;
    case BASKET_CLEAN:
      return Object.assign({},{products:[]});
      break;
  }
  return state;
};