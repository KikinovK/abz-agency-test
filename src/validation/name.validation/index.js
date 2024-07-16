import * as Yup from 'yup';

const name = Yup.string()
  .min(2, 'Username should contain 2-60 characters')
  .max(60, 'Username should contain 2-60 characters')
  .required('Username is required')

export default name;
