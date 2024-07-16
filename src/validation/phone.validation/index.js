import * as Yup from 'yup';

const phone = Yup.string()
  .matches(
    /^\+380[0-9]{9}$/,
    'User phone number. Number should start with code of Ukraine +380'
  )
  .required('Phone number is required')

export default phone;
