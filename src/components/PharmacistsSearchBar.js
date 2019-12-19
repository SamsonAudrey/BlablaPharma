import React, { Component } from 'react';
import {
  TextInput, View, Picker, StyleSheet, Dimensions
} from 'react-native';

export default class SearchBar extends Component {
  componentDidUpdate() {
    const gender = this.props.gender;
    const profession = this.props.profession;
    const text = this.props.text;
    this.props.onSearch(text, gender, profession);
  }

handleChangeSearch = (text) => {
  this.props.onTextUpdate(text);
  console.log(`t'as changé texxxt : ${text}`);
}

handleChangeGenderFilter = (genderValue) => {
  this.props.onGenderFilterUpdate(genderValue);
  console.log(`t'as changé gender filter : ${genderValue}`);
}

handleChangeProfessionFilter = (profession) => {
  this.props.onProfessionFilterUpdate(profession);
  console.log(`t'as changé profession filter : ${profession}`);
}

render() {
  const gender = this.props.gender
  const profession = this.props.profession
  return (
    <>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Enter your search terms"
          style={styles.textInputSearch}
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.handleChangeSearch(text)}
          value={this.props.text}
        />
      </View>
      <View>
        <Picker
          selectedValue={gender}
          style={{ height: 50, width: 100 }}
          onValueChange={(genderValue) => this.handleChangeGenderFilter(genderValue)}
        >
          <Picker.Item label="Pas de filtre" value="" />
          <Picker.Item label="Homme" value="male" />
          <Picker.Item label="Femme" value="female" />
          <Picker.Item label="Non précisé" value="another" />
        </Picker>
      </View>
      <View>
        <Picker
          selectedValue={profession}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue) => this.handleChangeProfessionFilter(itemValue)}
        >
          <Picker.Item label="Pas de filtre" value="" />
          <Picker.Item label="Pharmacien" value="pharmacist" />
          <Picker.Item label="Pharmacien BlablaPharma" value="pharmacistBlablapharma" />
        </Picker>
      </View>
    </>
  );
}
}

let styles = StyleSheet.create({
  searchBarContainer: {
    width: Dimensions.get('window').width - 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 2,
    marginVertical: 10,
    borderColor: 'lightgray',
    flex: 1
  },
  textInputSearch: {
    flex: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    height: 40,
    paddingLeft: 10
  },
  textSearchButton: {
    flex: 1,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 40
  }
});
