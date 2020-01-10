import React, { Component } from 'react';
import SearchBarPharmacists from '../containers/PharmacistsSearchBarContainer';
import PharmacistsListContainer from '../containers/PharmacistsListContainer';


class SearchPharmacistsPage extends Component {
  render() {
    return (
      <>
        <SearchBarPharmacists />
        <PharmacistsListContainer />
      </>
    );
  }
}

export default SearchPharmacistsPage;
