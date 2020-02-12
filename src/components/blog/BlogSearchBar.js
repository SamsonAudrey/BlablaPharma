import React, { Component } from 'react';
import {
  TextInput, View, StyleSheet, Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SafeAreaView from 'react-native-safe-area-view';


export default class BlogSearchBar extends Component {
  componentDidMount() {
    const { text } = this.props;
    this.props.onSearch(text);
  }

  componentDidUpdate() {
    const { text } = this.props;
    this.props.onSearch(text);
  }

  handleChangeSearch = (text) => {
    this.props.onTextUpdate(text);
  };


  render() {
    return (
      <>
        <SafeAreaView style={{ }}>
          <LinearGradient
            colors={['#BED469', '#BED469', '#BED469']}
          >
            <View style={styles.titleView}>
              <Text style={styles.title}>Blog</Text>
            </View>
          </LinearGradient>
          <View style={styles.searchBarContainer}>
            <TextInput
              placeholder="Rechercher une vidéo"
              style={styles.textInputSearch}
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.handleChangeSearch(text)}
              value={this.props.text}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

let styles = StyleSheet.create({
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24
  },
  titleFilter: {
    color: '#707070',
    fontSize: 16
  },
  form: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginVertical: '1%',
  },
  searchBarContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    height: 40,
    marginBottom: 10
  },
  textInputSearch: {
    borderColor: '#a9a9a9',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    height: '100%',
    width: '80%',
    padding: 5,
    color: '#707070',
    fontSize: 16,
    textAlign: 'center',
  },
  collapseBody: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterView: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#707070',
    marginVertical: '1%'
  },
});
