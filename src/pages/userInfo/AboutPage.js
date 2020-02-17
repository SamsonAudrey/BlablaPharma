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
        A PROPOS
            {'\n'}
            {'\n'}
          </Text>
          <Text style={styles.baseText}>
        Trouver facilement des réponses aux questions concernant votre santé.
        De façon fiable et professionnelle, les pharmaciens de blablapharma répondent à vos questions et vous aide à mieux gérer vos problèmes de santé.
        Ainsi, sur une seule application vous retrouvez :
            {'\n'}
            {'\n'}
        Coté patient
            {'\n'}
        un accès rapide à un pharmacien via la messagerie instantanée,
        des documents et vidéos utiles à votre traitement ou pathologie,
        la possibilité d’envoyer une ordonnance directement chez le pharmacien de votre choix,
        la possibilité d’inviter votre pharmacien habituel à utiliser l’application pour un suivi optimal.
            {'\n'}
            {'\n'}
        Coté pharmacien
            {'\n'}
        un meilleur suivi de votre patient,
        des outils pour assurer l’éducation thérapeutique du patient,
        la possibilité de préparer des ordonnances lors de moments plus calmes,
        des notifications pour informer le patient de la préparation de ses médicaments.
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
