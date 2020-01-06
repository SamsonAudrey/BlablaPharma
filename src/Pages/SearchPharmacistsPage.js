
import React, { Component } from 'react';
import SearchBarPharmacists from '../containers/PharmacistsSearchBarContainer';
import PharmacistsListContainer from '../containers/PharmacistsListContainer';
import {View} from 'react-native';

class SearchPharmacistsPage extends Component {
  render() {
    return (
      <>
          <View style={{backgroundColor: 'white'}}>
              <SearchBarPharmacists /></View>
        <PharmacistsListContainer />
      </>
    );
  }
}

export default SearchPharmacistsPage;
