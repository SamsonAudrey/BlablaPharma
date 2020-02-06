import { API_URL } from 'react-native-dotenv';

import ImgToBase64 from 'react-native-image-base64';
import axios from 'axios';
import { registerPatient } from './register/registerAction';


export const uploadImage = (
  imageURI,
  firstName,
  lastName,
  userBirthDate,
  userGender,
  userEmail,
  userPassword
) => (dispatch) => {
  ImgToBase64.getBase64String(imageURI)
    .then((base64String) => axios
      .post('https://api.cloudinary.com/v1_1/samsonaudrey/image/upload', {
        name: 'file',
        upload_preset: 'gyf6m7e6',
        file: `data:image/jpg;base64,${base64String}`
      })
      .then((response) => {
        console.log('PHOTO RESPONSE OK ');
        // console.log(response);
        // console.log(response.data); //secure_url
        const profileImageUrl = response.data.secure_url;
        dispatch(
          registerPatient(firstName, lastName, userBirthDate,
            userGender, userEmail, userPassword, profileImageUrl)
        );
      })
      .catch((error) => {
        console.log(`PHOTO ERROR ${error}`);
      }))
    .catch((err) => console.log(err));
};

export const registerSuccessImage = () => ({
  type: 'rjrj',
});
