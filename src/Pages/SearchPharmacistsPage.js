
import React, { Component } from 'react';
import { View } from 'react-native';
import SearchBarPharmacists from '../containers/PharmacistsSearchBarContainer';
import PharmacistsListContainer from '../containers/PharmacistsListContainer';

class SearchPharmacistsPage extends Component {
  render() {
    return (
      <View>
        <SearchBarPharmacists />
        <PharmacistsListContainer />
      </View>
    );
  }
}

export default SearchPharmacistsPage;
