import * as Yup from 'yup';

const position = Yup.number()
  .integer('Position ID must be an integer')
  .min(1, 'User\'s position id. You can get list of all positions with their IDs using the API method GET api/v1/positions')
  .required('Position ID is required')

export default position;
