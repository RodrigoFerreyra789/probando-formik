import * as Yup from 'yup';

const personalDataSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Too Short!')
        .max(20, 'Too Long!')
        .required('First name is Required'),

    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Last name is Required'),

    email: Yup.string().email('Invalid email').required('Email is Required'),
});

const accoutDataSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Username is Required'),

    password: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Password is Required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
        ),

    passwordConfirmation: Yup.string()
        .min(6, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Password confirmation is Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),

    terms: Yup.boolean()
        .required('Required')
        .oneOf([true], 'You must accept the terms and conditions!'),
});

export default [personalDataSchema, accoutDataSchema];
