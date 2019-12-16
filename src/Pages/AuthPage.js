import React, { Component } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";
import { store } from "../../store";

import t from "tcomb-form-native";

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String,
  remind: t.Boolean
});

const options = {
  fields: {
    email: {
      error: "L'email est incorrect"
    },
    password: {
      error: "Le mot de passe est incorrect",
      secureTextEntry: true,
      password: true
    },
    remind: {
      label: "Rester connecté"
    }
  }
};

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
      console.log("T'es connectéééé ");
      const { navigate } = this.props.navigation;
      navigate("SearchPharmacists");
      this.unsubscribe();
    } else {
      console.log("T'es pas connecté");
    }
  };

  handleSubmit = () => {
    const value = this._form.getValue();
    try {
      this.props.onUserAuth(value.email, value.password);
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    let error;
    this.props.error
      ? (error = <Text>Les identifiants donnés sont invalides</Text>)
      : (error = null);
    return (
      <View style={styles.container}>
        {error}
        <Form ref={c => (this._form = c)} type={User} options={options} />
        <Button title="Se Connecter" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  }
});
