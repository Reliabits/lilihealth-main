/* eslint-disable prettier/prettier */
import * as Yup from 'yup';

export const passwordValidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\])[A-Za-z\d !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\]{8,}$/;
export const phoneValidation = /^(?<!\d)\d{10}(?!\d)$/;
export const emailValidation = /^[^.][A-za-z0-9.]+@[a-z]+\.[a-z]{2,3}$/;

export const signInFormValidation = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email')
        .matches(emailValidation, 'Please enter a valid email')
        .required('The email is required'),
    password: Yup.string()
        .required('The password is required'),
});

export const signUpFormValidation = Yup.object().shape({
    name: Yup.string()
        .min(3, 'The name should be at least 3 characters')
        .max(25, 'The name should be maximum 25 characters')
        .required('The name is required'),
    phone: Yup.string()
        .matches(phoneValidation, 'The cell phone number must be 10 characters')
        .required('The phone number is required'),
    password: Yup.string()
        .matches(
            passwordValidation,
            'The password should be at least 1 upper case character, 1 small case character, 1 number, and 1 special character',
        )
        .required('The password is required'),
    email: Yup.string()
        .email('Please enter a valid email')
        .matches(emailValidation, 'Please enter a valid email')
        .required('The email is required'),
});

export const forgotPasswordFormValidation = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email')
        .matches(emailValidation, 'Please enter a valid email')
        .required('The email is required'),
});
