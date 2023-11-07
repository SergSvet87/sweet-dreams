process.env.NODE_TLS_REJECT_UNAUTHORIZED
import axios from 'axios';

export const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});
