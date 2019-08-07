import React, {PureComponent} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import categories from './categories';
import styles from './SearchFilter.less';
import PropTypes from 'prop-types';

let timeout = null;
export class SearchFilter extends PureComponent {

  constructor() {
    super();
    this.state = {
      firstLvlCategory: {},
      secondLvlCategory: {},
      thirdLvlCategory: {},
      selected: null,
    };
  }

  on1CategoryPress = (categoryFirstLvl) => {
    const {firstLvlCategory} = this.state;
    const state = {firstLvlCategory: categoryFirstLvl};

    if (firstLvlCategory.id !== categoryFirstLvl.id) {
      state.secondLvlCategory = {};
    } else {
      state.firstLvlCategory = {};
      state.secondLvlCategory = {};
      state.thirdLvlCategory = {};
    }
    this.setState(state);
  };



  handleOnCategorySelected = (category) => {
    const {onCategorySelected} = this.props;
    onCategorySelected(category);
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
      this.setState({selected: category});
    },1000)
  };

  on2CategoryPress = (secondLvlCategory) => {
    const state = {secondLvlCategory};
    if (!secondLvlCategory.subcategory.length) {
      this.handleOnCategorySelected(secondLvlCategory);
    }

    this.setState(state);
  };
  on3CategoryPress = (thirdLvlCategory) => {
    this.setState({thirdLvlCategory});
    this.handleOnCategorySelected(thirdLvlCategory);
  };

  renderCategoryFilter = (categories = [], onCategoryPress = () => {}) => {
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

  renderFilterSelected = () => {
    const {firstLvlCategory, secondLvlCategory, thirdLvlCategory} = this.state;
    const filters = [];
    const _this = this;

    const selectFilter = () => {
      _this.setState({selected: null});
    };

    if (firstLvlCategory.id) {
      filters.push({...firstLvlCategory, selected: false});
    }
    if (secondLvlCategory.id) {
      filters.push({...secondLvlCategory, selected: false});
    }
    if (thirdLvlCategory.id) {
      filters.push({...thirdLvlCategory, selected: true});
    }
    return this.renderCategoryFilter(filters, selectFilter);
  };

  render() {
    const {selected} = this.state;
    return (<View style={styles.search_filter}>
      {selected && this.renderFilterSelected()}
      {!selected && <View>
        {this.renderCategoryFilter(this.get1LevelCategories(),
            this.on1CategoryPress)}
        {this.renderCategoryFilter(this.get2LevelCategories(),
            this.on2CategoryPress)}
        {this.renderCategoryFilter(this.get3LevelCategories(),
            this.on3CategoryPress)}
      </View>}
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