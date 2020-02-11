import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';


export default class ModifUserPersonnalInfoPage extends Component {
  render() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
        PROTECTION DE VOS DONNÉES
          {'\n'}
          {'\n'}
        </Text>
        <Text>
        Parce que nous ne tirons aucun bénéfice de vos données, vous êtes maitres de les
        supprimer à tout moment.
        Vous pouvez supprimer les informations renseignées lors de l’inscription ou lors de
        vos échanges avec les pharmaciens.
        Les informations renseignées lors de l’inscription sont modifiables à partir de votre
        compte personnel.
        Les informations renseignées lors de discussion avec les pharmaciens peuvent
        être supprimées directement sur la page de la conversation
        </Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
