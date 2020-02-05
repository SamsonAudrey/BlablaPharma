import React, { Component } from 'react';
import {
  View, StyleSheet, Image
} from 'react-native';
import t from 'tcomb-form-native';
import RadioForm from 'react-native-simple-radio-button';
import moment from 'moment';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ImageFactory from 'react-native-image-picker-form';
import CButton from '../buttons/Button';
import ImagePicker from 'react-native-image-picker';

const { Form } = t.form;
const genderProps = [
  { label: 'Homme   ', value: 0 },
  { label: 'Femme   ', value: 1 },
  { label: 'Autre', value: 2 },
];

export default class GeneralModif extends Component {
  constructor(props) {
    super(props);
    const { account } = this.props;
    const { pharmacistAccount } = this.props;
    this.state = {
      user: {
        firstName: account.firstName,
        lastName: account.lastName,
        birth: new Date(account.birthDayDate),
      },
      picture: account.picture,
      pictureObject: null,
      gender: account.gender === 'male' ? 0 : account.gender === 'female' ? 1 : 2,
    };

    this.Name = t.refinement(t.String, (name) => name.length >= 2);

    this.General = t.struct({
      image: t.maybe(t.Object),
      firstName: this.Name,
      lastName: this.Name,
      birth: t.Date
    });

    if (pharmacistAccount) {
      this.state.user = {
        firstName: account.firstName,
        lastName: account.lastName,
        birth: new Date(account.birthDayDate),
        professionalId: pharmacistAccount.professionalId,
        professionLabel: pharmacistAccount.professionLabel,
        institutionName: pharmacistAccount.institutionName,
        address: pharmacistAccount.address,
        postalCode: pharmacistAccount.postalCode,
        city: pharmacistAccount.city,
      };
      this.General = t.struct({
        firstName: this.Name,
        lastName: this.Name,
        birth: t.Date,
        professionalId: this.Name,
        professionLabel: this.Name,
        institutionName: this.Name,
        address: this.Name,
        postalCode: this.Name,
        city: this.Name,
      });
    }
  }

  componentWillUnmount() {
    const { account } = this.props;
    if (account.role === 'pharmacist') {
      this.props.onUserPharmaSearch(account.id);
    } else {
      this.props.onUserSearch(account.id);
    }
  }

  onChange(value) {
    this.state.user = value;
  }

  chooseFile = () => {
    const options = {
      title: 'Photo de profil',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      takePhotoButtonTitle: 'Prendre une photo',
      chooseFromLibraryButtonTitle: 'Ouvrir la galerie',
      cancelButtonTitle: 'Annuler'
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.state.picture = response.uri;
        this.state.pictureObject = response;
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };


  handleSubmit = () => {
    const { userUpdateRemoteAccount, account, userUpdateRemotePharmaAccount } = this.props;
    const value = this._form.getValue();
    if (value) {
      const { gender } = this.state;
      const changes = {
        id: account.id,
        firstName: value.firstName,
        lastName: value.lastName,
        birthDayDate: value.birth,
        gender: gender === 0 ? 'male' : gender === 1 ? 'female' : 'another',
        picture: this.state.pictureObject
      };
      console.log('------------ GO -------');
      console.log(value.image);

      userUpdateRemoteAccount(changes);

      if (this.props.pharmacistAccount) {
        const changesPharma = {
          id: account.id,
          professionalId: value.professionalId,
          professionLabel: value.professionLabel,
          institutionName: value.institutionName,
          address: value.address,
          postalCode: value.postalCode,
          city: value.city,
        };
        userUpdateRemotePharmaAccount(changesPharma);
      }
    }
  };

  render() {
    const image = this.state.picture;
    return (
      <KeyboardAwareScrollView
        automaticallyAdjustContentInsets={false}
        enableOnAndroid
      >
        <View style={styles.container}>
          <View style={styles.image}>
            <Image
              source={image ? { uri: image } : require('../../assets/logo-fav.png')}
              style={{
                width: 80, height: 90, opacity: 1, marginRight: '5%'
              }}
            />
            <MaterialIcons name="photo-camera" size={24} color="#707070" />
            <CButton title="photo" onPress={this.chooseFile.bind(this)} />
          </View>
          <View style={styles.form}>
            <Form
              ref={(c) => this._form = c}
              type={this.General}
              options={options}
              initial={this.state.user}
              value={this.state.user}
              onChange={(v) => this.onChange(v)}
            />
            <RadioForm
              radio_props={genderProps}
              initial={this.state.gender}
              onPress={(value) => { this.state.gender = value; }}
              formHorizontal
              buttonColor="#868788"
              labelColor="#868788"
              selectedButtonColor="#868788"
              buttonSize={10}
              buttonWrapStyle={{ marginLeft: 20 }}
              style={{ marginTop: '4%' }}
            />
            <View style={styles.submitButton}>
              <CButton
                title="Mettre à jour"
                buttonStyle="green"
                onPress={this.handleSubmit}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const _ = require('lodash');

const s = _.cloneDeep(t.form.Form.stylesheet);
s.textbox.normal.minWidth = '70%';
s.textbox.error.minWidth = '70%';
s.textbox.normal.borderColor = '#707070';
s.textbox.normal.color = '#707070';
s.textbox.normal.borderRadius = 5;
s.dateValue.normal.color = '#707070';
s.dateValue.normal.borderWidth = 1;
s.dateValue.normal.borderColor = '#707070';
s.dateValue.normal.borderRadius = 5;
s.dateValue.error.borderWidth = 1;
s.dateValue.error.minWidth = '70%';
s.dateValue.error.color = '#707070';
s.dateValue.error.borderColor = '#a94442';
s.dateValue.error.borderRadius = 5;
s.errorBlock.fontSize = 15;

const styles = StyleSheet.create({
  container: {
    marginVertical: '5%'
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: '5%'
  },
  image: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  submitButton: {
    marginTop: '5%',
  },
  title: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.4)'
  },
});

const options = {
  fields: {
    email: {
      placeholder: 'Email',
      placeholderTextColor: '#707070',
      error: "L'email est incorrect"
    },
    firstName: {
      placeholder: 'Prénom',
      placeholderTextColor: '#707070',
      error: 'Doit contenir minimum 1 caractères'
    },
    lastName: {
      placeholder: 'Nom',
      placeholderTextColor: '#707070',
      error: 'Doit contenir minimum 1 caractères'
    },
    birth: {
      placeholder: 'Date de naissance',
      placeholderTextColor: '#707070',
      mode: 'date', // display the Date field as a DatePickerAndroid
      config: {
        format: (date) => {
          if (date) {
            return moment(date).format('YYYY-MM-DD');
          }
          return moment(new Date()).format('YYYY-MM-DD');
        },
        defaultValueText: 'Date de naissance',
      },
    },
    image: {
      config: {
        title: 'Choisir une photo de profil',
        options: ['Ouvrir camera', 'Selection gallerie', 'Annuler'],
        // Used on Android to style BottomSheet
        style: {
        },
        // cropping: false
      },
      error: 'Aucune image',
      factory: ImageFactory
    }
  },
  auto: 'placeholders',
  stylesheet: s
};
