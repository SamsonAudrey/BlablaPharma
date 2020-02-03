import React from 'react';
import {
  FlatList, StyleSheet, Text, View
} from 'react-native';
import PharmacistsListItems from '../pharmacists/PharmasistsListItems';
import Loading from '../utils/Loading';
import NoPharmacistFound from "../pharmacists/NoPharmacistFound";

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
                navigation={this.props.navigation}
                isConnected={this.props.isConnected}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (<View style={{ height: 15 }} />)}
            ListFooterComponent={() => (<View style={{ height: 20 }} />)}
            style={{ marginTop: 10 }}
          />
        ) : this.props.isFetching ? <Loading />
          : <NoPharmacistFound />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    alignItems: 'center',
  }
});
