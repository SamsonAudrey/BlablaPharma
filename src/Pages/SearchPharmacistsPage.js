
import React, { Component } from 'react';
import { View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import SearchBarPharmacists from '../containers/PharmacistsSearchBarContainer';
import PharmacistsListContainer from '../containers/PharmacistsListContainer';


class SearchPharmacistsPage extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ backgroundColor: 'white', marginTop: 10 }}>
            <SearchBarPharmacists />
          </View>
          <PharmacistsListContainer />
        </SafeAreaView>
      </>
    );
  }
}

export default SearchPharmacistsPage;
