
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
        <SafeAreaView style={{ flex: 1 }}>
          <LinearGradient
            colors={['#fff', '#d6e29b', '#BED469']}
            style={{flex:1}}
          >
            <SearchBarPharmacists />
              <PharmacistsListContainer />
          </LinearGradient>

        </SafeAreaView>
      </>
    );
  }
}

export default SearchPharmacistsPage;
