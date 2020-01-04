import * as React from 'react';
import {
  View, Text, StyleSheet, Dimensions
} from 'react-native';
import CButton from './Button';

export default class PharmacistsListItems extends React.Component {
  render() {
    const {
      data: {
        item: {
          firstName, lastName, gender, city, picture, institutionName, profession_label
        }
      },
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {firstName}
          {' '}
          {lastName}
        </Text>
        <Text style={styles.text}>{gender}</Text>
        {profession_label ? <Text style={styles.text}>{profession_label}</Text> : null}
        <Text style={styles.text}>{city}</Text>
        <Text style={styles.text}>{institutionName}</Text>
        <View style={styles.buttonContainer}>
          <CButton
            title="Contacter"
            buttonStyle="green"
            onPress={() => { }}
          />
        </View>
      </View>
    );
  }
}

// WHY LAST NAME = ' DECONNECTE ' ???????

const styles = StyleSheet.create({
  container: {
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: Dimensions.get('window').width * 0.8
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10
  },
  text: {
    color: '#707070'
  },
  title: {
    color: '#707070',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center'
  }
});
