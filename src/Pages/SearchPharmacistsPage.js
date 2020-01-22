import React, { Component } from 'react';
import SearchBarPharmacists from '../containers/PharmacistsSearchBarContainer';
import PharmacistsListContainer from '../containers/PharmacistsListContainer';


class SearchPharmacistsPage extends Component {
  render() {
    console.log(this.props.navigation)
    return (
      <>
        <SearchBarPharmacists />
        <PharmacistsListContainer navigation={this.props.navigation}/>
      </>
    );
  }
}

export default SearchPharmacistsPage;
