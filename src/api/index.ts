import axios, { AxiosInstance } from 'axios';

export const apiUrl = process.env.REACT_APP_API_DEV_FLAG
  ? (process.env.REACT_APP_API_URL_DEV as string)
  : (process.env.REACT_APP_API_URL as string);

const API: AxiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-type': 'application/json',
  },
});

export default API;
