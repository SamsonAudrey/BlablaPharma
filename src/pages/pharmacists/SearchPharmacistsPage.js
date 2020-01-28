import React, { Component } from 'react';
import SearchBarPharmacists from '../../containers/pharmacists/PharmacistsSearchBarContainer';
import PharmacistsListContainer from '../../containers/pharmacists/PharmacistsListContainer';


class SearchPharmacistsPage extends Component {
  render() {
    //console.log(this.props.navigation)
    return (
      <>
        <SearchBarPharmacists />
        <PharmacistsListContainer navigation={this.props.navigation}/>
      </>
    );
  }
}

export default SearchPharmacistsPage;
