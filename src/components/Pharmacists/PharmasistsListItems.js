import * as React from 'react';
import {
  View, Text, StyleSheet, Dimensions, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CButton from '../Buttons/Button';

export default class PharmacistsListItems extends React.Component {
  render() {
    const {
      data: {
        item: {
          firstName, lastName, gender, city, picture, institutionName, professionLabel
        }
      },
    } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo-fav.png')}
          style={{ width: '27%', height: '32%', alignSelf: 'center' }}
        />
        <Text style={styles.title} numberOfLines={1}>
          {firstName}
          {' '}
          {lastName}
        </Text>
        <Text style={styles.text}>
          {gender === 'female' ? <Icon name="venus" size={18} color="#BED469" />
            : gender === 'male' ? <Icon name="mars" size={18} color="#BED469" />
              : <Icon name="intersex" size={18} color="#BED469" />}
        </Text>
        {professionLabel
          ? (
            <Text style={styles.text}>
              <Icon name="user-md" size={18} color="#BED469" />
              {'  '}
              {professionLabel}
            </Text>
          )
          : null}
        <Text style={styles.text}>
          <Icon name="map-marker" size={18} color="#BED469" />
          {'  '}
          {city}
        </Text>
        <Text style={styles.text}>
          <Icon name="home" size={18} color="#BED469" />
          {'  '}
          {institutionName}
        </Text>
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
    marginVertical: 5,
    textAlign: 'center',
    // flex: 1,
  }
});
