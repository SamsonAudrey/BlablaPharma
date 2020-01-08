
import React, { Component } from 'react';
import {
  View, Text, Image, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';
import SafeAreaView from 'react-native-safe-area-view';

class UserPersonnalInfoPage extends Component {
  componentDidMount() {
    const { account } = this.props;
    this.props.onUserSearch(account.id);
  }

  render() {
    const { account } = this.props;
    const { navigate } = this.props.navigation;
    console.log(account);
    const birthDate = moment(account.birthDayDate).format('DD/MM/YYYY');
    const createdDate = new Date(account.createdAt).toISOString();
    const createdDateFormated = moment(createdDate).format('DD/MM/YYYY');
    return (
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Image
              source={require('../../assets/user-icon.png')}
              style={{ width: 100, height: 110, opacity: 0.5 }}
            />
            <Text style={styles.title}>
              {account.firstName}
              {' '}
              {account.lastName}
            </Text>
            <Icon
              name="edit"
              size={24}
              color="#707070"
              onPress={() => {
              /* Navigate to the authentication page */
                navigate('ModifUserPersonnalInfo');
              }}
              style={{ marginVertical: '5%' }}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.text}>
              <Entypo name="email" size={18} color="#707070" />
              {' '}
              {account.email}
            </Text>
            <Text style={styles.text}>
              <Icon name="birthday-cake" size={18} color="#707070" />
              {' '}
              {birthDate}
            </Text>
            <Text style={styles.text}>
              {account.gender === 'female' ? (
                <>
                  <Icon name="venus" size={18} color="#707070" />
                  {' '}
                Femme
                </>
              )
                : account.gender === 'male' ? (
                  <>
                    <Icon name="mars" size={18} color="#707070" />
                    {' '}
                  Homme
                  </>
                )
                  : (
                    <>
                      <Icon name="intersex" size={18} color="#707070" />
                      {' '}
                    Autre
                      {' '}
                    </>
                  )}
            </Text>
            <Text style={styles.text}>
              <Icon name="calendar-plus-o" size={18} color="#707070" />
              {' '}
            Compte créé le
              {' '}
              {createdDateFormated}
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.deleteAccount}>Supprimer le compte</Text>
          </View>
        </SafeAreaView>
      </>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: '5%'
  },
  title: {
    fontSize: 24,
    color: '#707070',
    marginTop: '5%'
  },
  info: {
    alignItems: 'flex-start',
    marginLeft: '15%'
  },
  text: {
    color: '#707070',
    fontSize: 18,
    marginVertical: '4%'
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  deleteAccount: {
    color: 'red',
    fontSize: 16,
    marginVertical: '6%'
  }
});


export default UserPersonnalInfoPage;
