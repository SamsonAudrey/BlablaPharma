import React, { Component } from 'react';
import {
  TextInput, View, StyleSheet, Text
} from 'react-native';
import {
  Collapse, CollapseHeader, CollapseBody
} from 'accordion-collapse-react-native';
import RadioForm from 'react-native-simple-radio-button';
import LinearGradient from 'react-native-linear-gradient';
import SafeAreaView from 'react-native-safe-area-view';

let initial = 0;

export default class SearchBar extends Component {
  componentDidMount() {
    const { gender } = this.props;
    const { text } = this.props;
    this.props.onSearch('', '', '');
  }

  componentDidUpdate() {
    const { gender } = this.props;
    const { text } = this.props;
    this.props.onSearch(text, gender, '');
  }

  handleChangeSearch = (text) => {
    this.props.onTextUpdate(text);
  };

  handleChangeGenderFilter = (genderValue) => {
    this.props.onGenderFilterUpdate(genderValue);
    switch (genderValue) {
      case 'male':
        initial = 1;
        return;
      case 'female':
        initial = 2;
        return;
      case 'another':
        initial = 3;
        return;
      default:
        initial = 0;
    }
  };

  render() {
    const genderProps = [
      { label: 'Tous   ', value: '' },
      { label: 'Homme   ', value: 'male' },
      { label: 'Femme   ', value: 'female' },
      { label: 'Autre', value: 'another' },
    ];

    return (
      <>
        <SafeAreaView style={{ }}>
          <LinearGradient
            colors={['#BED469', '#BED469', '#BED469']}
          >
            <View style={styles.titleView}>
              <Text style={styles.title}>Contacter un pharmacien</Text>
            </View>
          </LinearGradient>
          <View style={styles.searchBarContainer}>
            <TextInput
              placeholder="Rechercher des pharmaciens"
              style={styles.textInputSearch}
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.handleChangeSearch(text)}
              value={this.props.text}
            />
          </View>
          <Collapse>
            <CollapseHeader>
              <View style={styles.filterView}>
                <Text style={styles.titleFilter}>+ Filtres</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <View style={styles.form}>
                <RadioForm
                  radio_props={genderProps}
                  initial={initial}
                  onPress={(genderValue) => this.handleChangeGenderFilter(genderValue)}
                  formHorizontal
                  buttonColor="#868788"
                  labelColor="#868788"
                  selectedButtonColor="#868788"
                  buttonSize={10}
                  buttonWrapStyle={{ marginLeft: 20 }}
                  style={{ marginTop: '4%' }}
                />
              </View>
            </CollapseBody>
          </Collapse>
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
    color: '#707070',
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
    marginBottom: 0
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
