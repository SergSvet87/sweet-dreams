import { toast } from 'react-toastify';

const HTTPStatus = ({ errorNumber }) => {
  switch (errorNumber) {
    case 500:
      return 'Спробуй ще раз!';
    case 501:
      return 'Запит не опрацьований! Спробуй ще раз!';
    case 400:
      return 'Дані не вірні! :( ';
    case 401:
      return 'Ви не авторизувалися! :(';
    case 404:
      return 'Ресурс не знайдено! :( ';
    default:
      return 'Проблеми з сервером, ми працюємо над цим! :(';
  }
};

export const showAuthError = (error) => {
  const axiosError = error;

  if (axiosError.response.status === HTTPStatus(error)) {
    toast.error(axiosError.response.message);
    return;
  }

  toast.error(error.message);
};

export const AuthErrors = {
  PasswordDoNotMatch: 'Password mismatch',
  InvalidEmail: 'Enter a correct email',
  InvalidPhone: 'Enter a correct phone',
  RequiredField: 'This field is required',
  minLength: 'Minimum length 8 characters',
  minLengthName: 'Minimum length 2 characters',
  maxLengthName: 'Maximum length 20 characters',
  InvalidPassword:
    'The password must contain a special character, at least one capital character, and at least one number',
};
