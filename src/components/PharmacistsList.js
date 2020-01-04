import React from 'react';
import {
  Text, View, FlatList
} from 'react-native';

import PharmacistsListItems from './PharmasistsListItems';

export default class PharmarmacistsList extends React.Component {
  render() {
    return (
      <View>
        {this.props.isFetching === true
          ? <Text> Loading </Text> : <Text>Loaded</Text>}
        {this.props.pharmacists.length > 0 ? (
          <FlatList
            data={this.props.pharmacists}
            renderItem={(pharmacist) => (
              <PharmacistsListItems
                data={pharmacist}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ height: 10, backgroundColor: '#E5E5E5' }} />
            )}
          />
        ) : (
          <Text> Aucun pharmacien trouvé </Text>
        )}
      </View>
    );
  }
}
