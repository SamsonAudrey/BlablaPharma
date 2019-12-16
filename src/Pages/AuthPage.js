import React, { Component } from "react";
import { View, StyleSheet, Text, Button, Alert, ImageBackground } from "react-native";
import { store } from "../../store";
import { checkToken } from "../utils/auth";

import t from "tcomb-form-native";
import CButton from "../components/Button";
import HyperLinkText from "../components/HyperLinkText";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const Form = t.form.Form;

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email);
});

const User = t.struct({
  email: Email,
  password: t.String
});



export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.checkConnexion = this.checkConnexion.bind(this);
  }

  componentDidMount() {
    console.log("component did mount");
    this.unsubscribe = store.subscribe(this.checkConnexion);
    this.checkConnexion();
  }

  checkConnexion = () => {
    if (this.props.isConnected) {
      console.log("T'es connectéé");
      try {
        this.props.navigation.navigate("Tab");
      } catch (e) {
          console.log('error : ', e)
      }
    } else {
      console.log("T'es pas connecté Auth Page");
    }
  };

  handleSubmit = () => {
    this.unsubscribe();
    console.log("presssss")
    const value = this._form.getValue();
    try {
      this.props.onUserAuth(value.email, value.password);
        //this.props.navigation.navigate("Tab");
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    let error;
    this.props.error
      ? (error = <Text style={{color: 'red'}}>Les identifiants donnés sont invalides</Text>)
        : (error = <Text></Text>);
    const { navigate } = this.props.navigation;
    return (
        <View>
          <View style={styles.titleView}>
              <Text style={styles.title}>Connexion</Text>

          </View>
          <View style={styles.container}>
            {error}
            <ImageBackground
                source={require('../assets/engagement.jpg')}
                style={{width: '100%',  height: '100%'}}>
              <View style={styles.form}>
                  <Form
                      ref={c => (this._form = c)}
                      type={User}
                      options={options}
                  />
                  <View style={styles.buttonView}>
                    <CButton
                        title={"Connexion"}
                        buttonStyle={'grey'}
                        onPress={this.handleSubmit}
                    />
                  </View>

              </View>
            </ImageBackground>

          </View>

          <View style={styles.linkText1}>
            <HyperLinkText
                text={'Mot de passe oublié ?'}
                onPress={() => null}
                style={{color: '#BED469', marginLeft: 10, fontSize: 16}}/>

            <View style={styles.linkText2}>
              <Text style={{color: '#868788', marginLeft: 10,fontSize: 16}}>Pas encore inscrit ?</Text>
                <HyperLinkText
                  text={'S\'inscrire'}
                  onPress={() => this.props.navigation.navigate('Register')}
                  style={{color: '#BED469', marginLeft: 10, fontSize: 16}}/>
            </View>
          </View>
        </View>
    );
  }
}


// Custom Stylesheet
const _ = require('lodash');
const s = _.cloneDeep(t.form.Form.stylesheet)
s.textbox.normal.minWidth = '80%';
s.textbox.error.minWidth = '80%';
s.textbox.normal.borderColor = '#707070';
s.textbox.normal.color = '#707070';
s.textbox.normal.backgroundColor = '#fff';
s.textbox.error.backgroundColor = '#fff';
s.textbox.normal.borderRadius = 5;
s.dateValue.normal.color = '#707070';
s.dateValue.normal.borderWidth = 1;
s.dateValue.normal.borderColor = '#707070';
s.dateValue.normal.borderRadius = 5;
s.dateValue.error.borderWidth = 1;
s.dateValue.error.color = '#707070';
s.dateValue.error.borderColor = '#a94442';
s.dateValue.error.borderRadius = 5;
s.errorBlock.fontSize= 15;

const options = {
  fields: {
    email: {
      error: "L'email est incorrect",
      placeholder: 'Email',
      placeholderTextColor: '#707070',
    },
    password: {
      error: "Le mot de passe est incorrect",
      secureTextEntry: true,
      password: true,
      placeholder: 'Mot de passe',
      placeholderTextColor: '#707070',
    }
  },
  auto: 'placeholders',
  stylesheet: s
};

const styles = StyleSheet.create({
  titleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  title: {
    color: '#BED469',
    fontSize: 24
  },
  container: {
    height: '50%',
    marginTop: '5%'
  },
  buttonView: {
    marginTop: '8%'
  },
  form: {
    paddingTop: '12%',
    padding: '5%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'rgba(255,255,255,0.4)'
  },
  linkText2: {
    marginTop: '5%',
    flexDirection: 'row'
  },
  linkText1: {
    marginTop: '5%'
  }
});
