import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SearchBarPharmacists from '../containers/PharmacistsSearchBarContainer';
import PharmacistsListContainer from '../containers/PharmacistsListContainer';


class SearchPharmacistsPage extends Component {
  render() {
    return (
      <>
        <LinearGradient
          colors={['#fff', '#fff', '#fff']}
        >
          <SearchBarPharmacists />
        </LinearGradient>
        <PharmacistsListContainer />

      </>
    );
  }
}

export default SearchPharmacistsPage;
