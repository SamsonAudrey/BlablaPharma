import React from "react";
import { Button } from "react-native";
import { checkToken } from "../utils/auth";
import { store } from "../../store";

export default class UserInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this._renderOnline = this._renderOnline.bind(this);
  }

  componentDidMount() {
    //store.subscribe(this.render);
  }

  handleSubmitLogout = () => {
    try {
      this.props.onUserLogout();
    } catch (error) {
      console.log(error.message);
    }
  };

  _renderOnline = navigate => {
    return (
      <>
        <Button
          title="Logout"
          onPress={() => {
            /*Navigate to the authentication page*/
            this.handleSubmitLogout();
          }}
        />
      </>
    );
  };

  _renderOffline = navigate => {
    return (
      <>
        <Button
          title="Connexion"
          onPress={() => {
            /*Navigate to the authentication page*/
            navigate("AuthPage");
          }}
        />
        <Button
          title="Inscription"
          onPress={() => {
            /*Navigate to the register page*/
            navigate("RegisterPage");
          }}
        />
      </>
    );
  };

  checkConnexion = () => {
    if (this.props.isConnected) {
      console.log("T'es connectéééé User Info");
    } else {
      console.log("T'es pas connecté User Info");
    }
  };

  render() {
    let page;
    const { navigate } = this.props.navigation;
    if (this.props.isConnected) {
      page = (
        <>
          <Button
            title="Logout"
            onPress={() => {
              /*Navigate to the authentication page*/
              this.handleSubmitLogout();
            }}
          />
        </>
      );
    } else {
      page = (
        <>
          <Button
            title="Connexion"
            onPress={() => {
              /*Navigate to the authentication page*/
              //navigate("AuthPage");
                this.props.navigation.navigate("Home");
            }}
          />
          <Button
            title="Inscription"
            onPress={() => {
              /*Navigate to the register page*/
              navigate("RegisterPage");
            }}
          />
        </>
      );
    }
    return <>{page}</>;
  }
}
