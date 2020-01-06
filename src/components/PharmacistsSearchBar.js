import React, { Component } from 'react';
import {
  TextInput, View, Picker, StyleSheet, Text
} from 'react-native';
import {
  Collapse, CollapseHeader, CollapseBody
} from 'accordion-collapse-react-native';
import RadioForm from 'react-native-simple-radio-button';

let initial = 0;

export default class SearchBar extends Component {
  componentDidMount() {
    const { gender } = this.props;
    const { profession } = this.props;
    const { text } = this.props;
    this.props.onSearch(text, gender, 'pharmacist');
    this.props.onBlablaSearch(text, gender, profession);
  }

  componentDidUpdate() {
    const { gender } = this.props;
    const { profession } = this.props;
    const { text } = this.props;
    this.props.onSearch(text, gender, 'pharmacist');
    this.props.onBlablaSearch(text, gender, profession);
  }

  handleChangeSearch = (text) => {
    this.props.onTextUpdate(text);
    // console.log(`t'as changé texxxt : ${text}`);
  };

  handleChangeGenderFilter = (genderValue) => {
    this.props.onGenderFilterUpdate(genderValue);
    // console.log(`t'as changé gender filter : ${genderValue}`);
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

  handleChangeProfessionFilter = (profession) => {
    this.props.onProfessionFilterUpdate(profession);
    console.log(`t'as changé profession filter : ${profession}`);
  };

  render() {
    // const { gender } = this.props;
    // const { profession } = this.props;
    const genderProps = [
      { label: 'Tous   ', value: '' },
      { label: 'Homme   ', value: 'male' },
      { label: 'Femme   ', value: 'female' },
      { label: 'Autre', value: 'another' },
    ];

    const professionProps = [
      { label: 'Tous   ', value: '' },
      { label: 'Pharmaciens   ', value: 'pharmacist' },
      { label: 'BlaBlaPharmaciens', value: 'pharmacistBlablapharma' },
    ];
    return (
      <>
        <View style={styles.titleView}>
          <Text style={styles.title}>Contacter un pharmacien</Text>
        </View>
        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Recherche pharmaciens proches"
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
      </>
    );
  }
}

/* <RadioForm
  radio_props={professionProps}
  initial={0}
  onPress={(itemValue) => this.handleChangeProfessionFilter(itemValue)}
  formHorizontal
  buttonColor="#868788"
  labelColor="#868788"
  selectedButtonColor="#868788"
  buttonSize={10}
  buttonWrapStyle={{ marginLeft: 20 }}
  style={{ marginTop: '4%' }}
  // UTIL ???
/> */

let styles = StyleSheet.create({
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
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
    backgroundColor: 'white',
    marginVertical: '1%'
  },
  searchBarContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%',
    height: 35,
    marginBottom: 0
  },
  textInputSearch: {
    borderColor: '#a9a9a9',
    borderWidth: 1,
    borderRadius: 5,
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
    // height: '100%'
  },
  filterView: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#707070',
    marginVertical: '1%'
  },
});
