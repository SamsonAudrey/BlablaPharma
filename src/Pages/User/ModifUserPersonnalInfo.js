import React, { Component } from 'react';
import {
  Button,
  Platform, StyleSheet, Text, View
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import CustomTabView from '../../components/CustomTabView';
import GeneralModifInfo from '../../components/GeneralModifInfo';
import PasswordChange from '../../components/PasswordChange';
import EmailChange from '../../components/EmailChange';
import BackButton from '../../components/BackButton';

class ModifUserPersonnalInfoPage extends Component {
  stateTabView = {
    index: 0,
    routes: [
      { key: 'first', title: 'General' },
      { key: 'second', title: 'Mot de Passe' },
      { key: 'third', title: 'Email' },
    ]
  };

  componentWillUnmount() {
    const { account } = this.props;
    this.props.onClearError();
    this.props.onUserSearch(account.id);
  }

 renderScene = ({ route }) => {
   switch (route.key) {
     case 'first':
       return (
         <GeneralModifInfo
           userUpdateRemoteAccount={this.props.onUserUpdateRemoteAccount}
           onUserSearch={this.props.onUserSearch}
           account={this.props.account}
           error={this.props.selector.error403Update}
         />
       );
     case 'second':
       return (
         <PasswordChange
           userUpdateRemoteAccount={this.props.onUserUpdateRemoteAccount}
           onUserSearch={this.props.onUserSearch}
           account={this.props.account}
           error={this.props.selector.error403Update}
         />
       );
     case 'third':
       return (
         <EmailChange
           userUpdateRemoteAccount={this.props.onUserUpdateRemoteAccount}
           onUserSearch={this.props.onUserSearch}
           account={this.props.account}
           error={this.props.selector.error403Update}
         />
       );
     default:
       return null;
   }
 };

 render() {
   if (this.props.selector.successUpdate) {
     alert('Données mises à jour !');
     this.props.onClearSuccess();
   }
   return (
     <>
       <SafeAreaView style={{ flex: 1 }}>
         <BackButton
           title="Retour"
           onPress={() => this.props.navigation.goBack()}
         />
         <View style={styles.titleView}>
           <Text style={styles.title}>Mise à jour</Text>
         </View>
         <CustomTabView
           renderScene={this.renderScene}
           state={this.stateTabView}
         />
       </SafeAreaView>
     </>
   );
 }
}

const styles = StyleSheet.create({
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: Platform.OS === 'ios' ? 0 : 20,
  },
  title: {
    color: '#707070',
    fontSize: 24
  }
});

export default ModifUserPersonnalInfoPage;
