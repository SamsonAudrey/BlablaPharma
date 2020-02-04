import React, { Component } from 'react';
import {
  View, Text, Image, StyleSheet, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';
import SafeAreaView from 'react-native-safe-area-view';
import BackButton from '../../components/buttons/BackButton';
import CModal from '../../components/utils/Modal';
import CButton from '../../components/buttons/Button';

class UserPersonnalInfoPage extends Component {

  componentDidMount() {
    const { account } = this.props;
    if (account.role === 'pharmacist') {
      this.props.onUserPharmaSearch(account.id);
    } else {
      this.props.onUserSearch(account.id);
    }
  }

  handleDeleteAccount = () => {
    try {
      const { account } = this.props;
      this.props.onUserLogout();
      this.props.onDeleteAccount(account.id);
      // Go back to home page
      const { navigate } = this.props.navigation;
      navigate('Home');
    } catch (error) {
      console.log(error.message);
    }
  };

  handler = () => (
    <Text style={styles.deleteAccount}>
        Supprimer le compte
    </Text>
  );

  button= () => (
    <CButton
      title="Supprimer"
      buttonStyle="danger"
      onPress={() => this.handleDeleteAccount()}
    />
  );


  render() {
    const { account } = this.props;
    const { navigate } = this.props.navigation;
    const birthDate = moment(account.birthDayDate).format('DD/MM/YYYY');
    const createdDate = new Date(account.createdAt).toISOString();
    const createdDateFormated = moment(createdDate).format('DD/MM/YYYY');
    const { role } = account;
    const { pharmacistAccount } = this.props;
    console.log(account);
    return (
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <BackButton
            title="Retour"
            onPress={() => this.props.navigation.goBack()}
          />
          <View style={styles.container}>
            <Image
              source={account.picture ? { uri: account.picture } : require('../../assets/logo-fav.png')}
              style={{ width: 100, height: 110, opacity: 1 }}
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
            <ScrollView
              style={{ height: '40%' }}
            >
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
              { role === 'pharmacist' ? (
                <>
                  <Text style={styles.text}>
                    <Icon name="user-md" size={18} color="#707070" />
                    {' '}
                    Profession :
                    {' '}
                    {pharmacistAccount.professionLabel === 'pharmacist' ? 'pharmacien'
                      : pharmacistAccount.professionLabel === 'student' ? 'étudiant' : 'blablapharmacien'}
                  </Text>
                  <Text style={styles.text}>
                    <Icon name="certificate" size={18} color="#707070" />
                    {' '}
                    {pharmacistAccount.professionalId}
                  </Text>
                  <Text style={styles.text}>
                    <Icon name="home" size={18} color="#707070" />
                    {' '}
                    {pharmacistAccount.institutionName}
                  </Text>
                  <Text style={styles.text}>
                    <Icon name="map-marker" size={18} color="#707070" />
                    {' '}
                    {' '}
                    {pharmacistAccount.address}
                    {', '}
                    {pharmacistAccount.city}
                  </Text>
                </>
              )
                : null}
            </ScrollView>
          </View>
          <View style={styles.footer}>
            <CModal
              handler={this.handler()}
              text="Êtes-vous sûr de vouloir supprimer votre compte ?"
              button={this.button()}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: '3%'
  },
  title: {
    fontSize: 24,
    color: '#707070',
    marginTop: '5%'
  },
  info: {
    alignItems: 'flex-start',
    marginLeft: '15%',
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
    marginVertical: '3%'
  },
  deleteAccount: {
    color: 'red',
    fontSize: 16,
  }
});


export default UserPersonnalInfoPage;
