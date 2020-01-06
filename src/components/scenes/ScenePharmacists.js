import React from 'react';
import {
  FlatList, StyleSheet, Text, View
} from 'react-native';
import PharmacistsListItems from '../PharmasistsListItems';

export default class ScenePharmacists extends React.Component {
  render() {
    return (
      <View style={styles.scene}>
        {this.props.pharmacists.length > 0 ? (
          <FlatList
            data={this.props.pharmacists}
            renderItem={(pharmacist) => (
              <PharmacistsListItems
                data={pharmacist}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (<View style={{ height: 15 }} />)}
            ListFooterComponent={() => (<View style={{ height: 20 }} />)}
            style={{ marginTop: 10 }}
          />
        ) : (
          <Text> Aucun pharmacien trouvé </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    alignItems: 'center',
    // justifyContent: 'center',
    // marginVertical: 10
    // flex:8
  }
});
