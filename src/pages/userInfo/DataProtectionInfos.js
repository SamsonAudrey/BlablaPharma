import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import BackButton from '../../components/buttons/BackButton';


export default class DataProtectionInfosPage extends Component {
  render() {
    return (
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <BackButton
            title="Retour"
            onPress={() => this.props.navigation.goBack()}
          />

          <Text style={styles.titleText} onPress={this.onPressTitle}>
        PROTECTION DE VOS DONNÉES
            {'\n'}
            {'\n'}
          </Text>
          <Text style={styles.baseText}>
        Parce que nous ne tirons aucun bénéfice de vos données, vous êtes maitres de les
        supprimer à tout moment.
            {'\n'}
            {'\n'}
        Vous pouvez supprimer les informations renseignées lors de l’inscription ou lors de
        vos échanges avec les pharmaciens.
            {'\n'}
            {'\n'}
        Les informations renseignées lors de l’inscription sont modifiables à partir de votre
        compte personnel.
            {'\n'}
            {'\n'}
        Les informations renseignées lors de discussion avec les pharmaciens peuvent
        être supprimées directement sur la page de la conversation.
          </Text>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    textAlign: 'justify',
    marginHorizontal: '7%'
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
