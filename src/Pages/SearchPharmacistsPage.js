import React, { Component } from 'react';
import SearchBarPharmacists from '../containers/Pharmacists/PharmacistsSearchBarContainer';
import PharmacistsListContainer from '../containers/Pharmacists/PharmacistsListContainer';


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
