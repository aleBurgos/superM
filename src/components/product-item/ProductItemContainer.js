import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import  ProductItem from './ProductItem';
import {addProduct, removeProduct} from '../../state/ducks/basket';

const mapDispatchToProps = (dispatch) => {
  return (
      bindActionCreators({ addProduct, removeProduct }, dispatch)
  );
};

export default connect((state) => { return state; }, mapDispatchToProps)(ProductItem);
