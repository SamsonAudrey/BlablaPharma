import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { checkToken } from "../utils/auth";

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
  }

  componentDidMount() {
    console.log("component did mount");
    checkToken().then(
      () => {
        console.log("T'es connectéééé ");
      },
      () => {
        console.log("T'es pas connecté");
      }
    );
  }

  handleSubmit = () => {
    const value = this._form.getValue();
    try {
      this.props.onUserAuth(value.email, value.password);
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Refresh rfdToken : {this.props.refreshToken} </Text>
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
