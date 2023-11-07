import * as yup from 'yup';

import { AuthErrors } from '@/common/errors/index';

export const LoginSchema = yup
  .object({
    email: yup.string().email(AuthErrors.InvalidEmail).required(AuthErrors.RequiredField),
    password: yup
      .string()
      // .min(8, AuthErrors.minLength)
      .required(AuthErrors.RequiredField),
    // .matches(
    //   /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
    //   AuthErrors.InvalidPassword
    // ),
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
    username: yup
      .string()
      .min(2, AuthErrors.minLengthName)
      .max(20, AuthErrors.maxLengthName)
      .required(AuthErrors.RequiredField),
    // userlastname: yup
    //   .string()
    //   .min(2, AuthErrors.minLengthName)
    //   .max(20, AuthErrors.maxLengthName)
    //   .required(AuthErrors.RequiredField),
    email: yup.string().email(AuthErrors.InvalidEmail).required(AuthErrors.RequiredField),
    password: yup
      .string()
      .min(8, AuthErrors.minLength)
      .required(AuthErrors.RequiredField)
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
        AuthErrors.InvalidPassword
      ),
    confirmPassword: yup
      .string()
      .min(8, AuthErrors.minLength)
      .required(AuthErrors.RequiredField)
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
        AuthErrors.InvalidPassword
      ),
  })
  .required();
