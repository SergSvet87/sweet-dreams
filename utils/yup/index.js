import * as yup from 'yup';

import { AppErrors } from '@/common/errors/index';

export const LoginSchema = yup
  .object({
    email: yup.string().email(AppErrors.InvalidEmail).required(AppErrors.RequiredField),
    password: yup
      .string()
      // .min(8, AppErrors.minLength)
      .required(AppErrors.RequiredField),
    // .matches(
    //   /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
    //   AppErrors.InvalidPassword
    // ),
  })
  .required();

export const AdminSchema = yup
  .object({
    name: yup.string().required(AppErrors.RequiredField),
    password: yup.string().min(4, AppErrors.minLength).required(AppErrors.RequiredField),
  })
  .required();

export const RegisterSchema = yup
  .object({
    username: yup
      .string()
      .min(2, AppErrors.minLengthName)
      .max(20, AppErrors.maxLengthName)
      .required(AppErrors.RequiredField),
    // userlastname: yup
    //   .string()
    //   .min(2, AppErrors.minLengthName)
    //   .max(20, AppErrors.maxLengthName)
    //   .required(AppErrors.RequiredField),
    email: yup.string().email(AppErrors.InvalidEmail).required(AppErrors.RequiredField),
    password: yup
      .string()
      .min(8, AppErrors.minLength)
      .required(AppErrors.RequiredField)
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
        AppErrors.InvalidPassword
      ),
    confirmPassword: yup
      .string()
      .min(8, AppErrors.minLength)
      .required(AppErrors.RequiredField)
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
        AppErrors.InvalidPassword
      ),
  })
  .required();
