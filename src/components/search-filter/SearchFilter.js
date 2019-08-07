import React, {PureComponent} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import categories from './categories';
import styles from './SearchFilter.less';
import ProductItem from '../product-item/ProductItem';
import PropTypes from 'prop-types';

export class SearchFilter extends PureComponent {

  constructor() {
    super();
    this.state = {
      firstLvlCategory: {},
      secondLvlCategory: {},
      thirdLvlCategory: {},
    };
  }

  // render1LevelCategories = () => {
  //   const _this = this;
  //   const addFilter = (filter) => {
  //     _this.setState({firstLvlCategories: filter});
  //   };
  //   return ({item}) => {
  //     item.selected = _this.state.firstLvlCategories && _this.state.firstLvlCategories.id === item.id;
  //     return this.renderItem(item, addFilter);
  //   };
  // };

  on1CategoryPress = (categoryFirstLvl) => {
    const {firstLvlCategory} = this.state;
    const state = {firstLvlCategory:categoryFirstLvl};
    if(firstLvlCategory.id !==categoryFirstLvl.id){
      state.secondLvlCategory = {};
    }else{
      state.firstLvlCategory = {};
      state.secondLvlCategory = {};
    }
    this.setState(state);
  };
  on2CategoryPress = (secondLvlCategory) => {
    const {onCategorySelected} = this.props;
    this.setState({secondLvlCategory});
    if (!secondLvlCategory.subcategory.length) {
      onCategorySelected(secondLvlCategory);
    }
  };
  on3CategoryPress = (thirdLvlCategory) => {
    const {onCategorySelected} = this.props;
    this.setState({thirdLvlCategory});
    onCategorySelected(thirdLvlCategory);
  };
  renderCategoryFilter = (categories = [], onCategoryPress) => {
    if (!categories.length) {
      return null;
    }

    const renderItem = ({item}) => {
      return (<TouchableOpacity key={item.id}
                                style={item.selected
                                    ? styles.filter__active
                                    : styles.filter}
                                onPress={() => { onCategoryPress(item); }}>
        <Text style={item.selected
            ? styles['filter__text--active']
            : styles.filter__text}>{item.icon} {item.name} </Text>
      </TouchableOpacity>);
    };

    return (<FlatList
        contentContainerStyle={styles.search_filter__category}
        horizontal
        data={categories}
        renderItem={renderItem}/>);
  };

  get1LevelCategories = () => {
    const {firstLvlCategory} = this.state;
    return categories.map((item) => {
      if (item.selected) {
        delete item.selected;
      }
      if (firstLvlCategory && item.id === firstLvlCategory.id) {
        item.selected = true;
      }
      return item;
    });
  };
  get2LevelCategories = () => {
    const {secondLvlCategory, firstLvlCategory} = this.state;
    const categories = firstLvlCategory.subcategory || [];

    return categories.map((item) => {
      if (item.selected) {
        delete item.selected;
      }
      if (secondLvlCategory && item.id === secondLvlCategory.id) {
        item.selected = true;
      }
      return item;
    });
  };
  get3LevelCategories = () => {
    const {secondLvlCategory, thirdLvlCategory} = this.state;
    const categories = secondLvlCategory.subcategory || [];

    return categories.map((item) => {
      if (item.selected) {
        delete item.selected;
      }
      if (thirdLvlCategory && item.id === thirdLvlCategory.id) {
        item.selected = true;
      }
      return item;
    });
  };

  render() {
    return (<View style={styles.search_filter}>
      {this.renderCategoryFilter(this.get1LevelCategories(),
          this.on1CategoryPress)}
      {this.renderCategoryFilter(this.get2LevelCategories(),
          this.on2CategoryPress)}
      {this.renderCategoryFilter(this.get3LevelCategories(),
          this.on3CategoryPress)}
    </View>);
  }
}

SearchFilter.propTypes = {
  onCategorySelected: PropTypes.func,
};
SearchFilter.defaultProps = {
  onCategorySelected: () => {},
};
export default SearchFilter;