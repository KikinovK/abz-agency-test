import * as Yup from 'yup';

import nameValidation from '../name.validation';
import emailValidation from '../email.validation';
import phoneValidation from '../phone.validation';
import positionValidation from '../position.validation';
import photoValidation from '../photo.validation';

const validationSchemaSignUp = Yup.object().shape({
  name: nameValidation,
  email: emailValidation,
  phone: phoneValidation,
  position_id: positionValidation,
  photo: photoValidation
});

export default validationSchemaSignUp;
