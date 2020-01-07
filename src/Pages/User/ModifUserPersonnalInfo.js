import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomTabView from '../../components/CustomTabView';
import GeneralModifInfo from '../../components/GeneralModifInfo';
import PasswordChange from '../../components/PasswordChange';
import EmailChange from '../../components/EmailChange';

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
     <CustomTabView
       renderScene={this.renderScene}
       state={this.stateTabView}
     />
   );
 }
}

export default ModifUserPersonnalInfoPage;
