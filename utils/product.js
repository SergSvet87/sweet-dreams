process.env.NODE_TLS_REJECT_UNAUTHORIZED;
import axios from 'axios';

export const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  // timeout: 1000,
  headers: {
    'Content-TypeX-Custom-Header': 'application/json',
  },
});

export const getAllProduct = async () => await instance.get('Product');

// export const signUp = async authData => await instance.post('Account/register', authData);
// export const signUpGoogle = async () => await instance.get('Account/googleAuth/register');

// export const signIn = async authData => await instance.post('Account/login', authData);

// export const getProductId = async id => await instance.get(`product/${id}`);

// export const fetcher = (...args) => fetch(...args).then(res => res.json());
