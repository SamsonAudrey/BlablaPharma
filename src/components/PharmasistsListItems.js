import * as React from 'react';
import {
  View, Text, StyleSheet, Dimensions, Image
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
        <Image
          source={require('../assets/logo-fav.png')}
          style={{ width: '27%', height: '32%', alignSelf: 'center' }}
        />
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
    flex: 1,
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    padding: 10,
    paddingBottom: 0,
    backgroundColor: 'white',
    height: 265,
    alignItems: 'center'
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 7
  },
  text: {
    color: '#707070',
    fontSize: 12,
  },
  title: {
    color: '#707070',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center'
  }
});
