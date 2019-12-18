import React from 'react';
import {
  Text, View, FlatList
} from 'react-native';

import PharmacistsListItems from './PharmasistsListItems';

export default class CoursePage extends React.Component {
  render() {
    return (
      <View>
        {this.props.pharmacists.length > 0 ? (
          <FlatList
            data={this.props.pharmacists}
            renderItem={(pharmacist) => (
              <PharmacistsListItems
                pharmacist={pharmacist}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ height: 0.5, backgroundColor: '#E5E5E5' }} />
            )}
          />
        ) : (
          <Text> Desooo pas de pharmaciens </Text>
        )}
      </View>
    );
  }
}
