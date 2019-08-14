import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Basket} from './Basket';

const mapDispatchToProps = (dispatch) => {
  return (
      bindActionCreators({}, dispatch)
  );
};

export default connect(({basket}) => {
  return {
      ...basket
  };
}, mapDispatchToProps)(Basket);
