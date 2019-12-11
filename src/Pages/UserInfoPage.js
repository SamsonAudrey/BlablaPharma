import React from 'react';
import { Button } from 'react-native';

export default class UserInfoPage extends React.Component {
    constructor(props){
        super(props)
    }


    render () {
        const {navigate} = this.props.navigation;
        return (
            <>
                <Button
                title="Connexion"
                onPress={() =>  {
                    /*Navigate to the authentication page*/
                    navigate('AuthPage')
                }}/>
                <Button
                title="Inscription"
                onPress={() =>  {
                    /*Navigate to the register page*/
                    navigate('RegisterPage')
                }}/>
            </>
        )
    }

}
