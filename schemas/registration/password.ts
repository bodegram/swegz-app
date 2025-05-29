import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[\W_]/, 'Password must contain at least one symbol')
    .matches(/([A-Z]|\d)/, 'Password must contain at least one uppercase letter or number'),
});

export default passwordSchema;
