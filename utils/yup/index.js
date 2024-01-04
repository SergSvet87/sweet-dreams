import * as yup from 'yup';

import { AuthErrors } from '@/common/errors/index';

export const LoginSchema = yup
  .object({
    email: yup.string().email(AuthErrors.InvalidEmail).required(AuthErrors.RequiredField),
    password: yup
      .string()
      .min(8, AuthErrors.minLength)
      .required(AuthErrors.RequiredField)
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{8,30}$/,
        AuthErrors.InvalidPassword
      ),
  })
  .required();

export const AdminSchema = yup
  .object({
    name: yup.string().required(AuthErrors.RequiredField),
    password: yup.string().min(4, AuthErrors.minLength).required(AuthErrors.RequiredField),
  })
  .required();

export const RegisterSchema = yup
  .object({
    firstName: yup
      .string()
      .required(AuthErrors.RequiredField)
      .min(2, AuthErrors.minLengthName)
      .max(30, AuthErrors.maxLengthName),
    lastName: yup
      .string()
      .required(AuthErrors.RequiredField)
      .min(2, AuthErrors.minLengthName)
      .max(20, AuthErrors.maxLengthName),
    phone: yup
      .string()
      .required(AuthErrors.RequiredField)
      .matches(
        /^(\+38)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
        AuthErrors.InvalidPhone
      ),
    email: yup.string().email(AuthErrors.InvalidEmail).required(AuthErrors.RequiredField),
    password: yup
      .string()
      .required(AuthErrors.RequiredField)
      .min(8, AuthErrors.minLength)
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{8,20}$/,
        AuthErrors.InvalidPassword
      ),
    confirmPassword: yup
      .string()
      .required(AuthErrors.RequiredField)
      .min(8, AuthErrors.minLength)
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{8,20}$/,
        AuthErrors.InvalidPassword
      ),
  })
  .required();

export const ResetSchema = yup
  .object({
    password: yup
      .string()
      .min(8, AuthErrors.minLength)
      .required(AuthErrors.RequiredField)
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{8,30}$/,
        AuthErrors.InvalidPassword
      ),
  })
  .required();

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address format'),
  name: yup.string().matches(/[a-zA-Z]/, 'Only use letters'),
  lastName: yup.string().matches(/[a-zA-Z]/, 'Only use letters'),
  country: yup.string().matches(/[a-zA-Z]/, 'Only use letters'),
  region: yup.string().matches(/[a-zA-Z]/, 'Only use letters'),
  zip: yup.string().matches(/^\d+$/, 'Only use numbers'),
  city: yup.string().matches(/[a-zA-Z]/, 'Only use letters'),
  street: yup.string().matches(/[a-zA-Z]/, 'Only use letters'),
  building: yup.string().matches(/^\d+$/, 'Only use numbers'),
  unit: yup.string().matches(/^\d+$/, 'Only use numbers'),
  phone: yup.string().matches(/^\+380\d{9}$/, 'Invalid phone format'),
  card: yup.string().matches(/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/, 'Only use numbers'),
  date: yup.string().matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Only use numbers'),
  security: yup.string().matches(/^\d{4}$/, 'Only use numbers'),
  cardName: yup.string().matches(/[a-zA-Z]/, 'Only use letters'),
});
