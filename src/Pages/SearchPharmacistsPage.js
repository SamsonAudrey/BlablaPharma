
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import LinearGradient from 'react-native-linear-gradient';
import SearchBarPharmacists from '../containers/PharmacistsSearchBarContainer';
import PharmacistsListContainer from '../containers/PharmacistsListContainer';


class SearchPharmacistsPage extends Component {
  render() {
    return (
      <>
          <LinearGradient
            colors={['#fff', '#fff', '#fff']}
            //style={{flex:1}}
          >
            <SearchBarPharmacists />

          </LinearGradient>
          <PharmacistsListContainer />

      </>
    );
  }
}

export default SearchPharmacistsPage;
