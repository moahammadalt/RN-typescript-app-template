import axios from 'axios';

export const baseURL = `https://reqbin.com/echo/`;

export const API = axios.create({ baseURL });

/* export const setAuthorizationToken = (token?: string) => {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common['Authorization'];
  }
};

export const removeAuthorizationToken = () => {
  delete axios.defaults.headers.common['Authorization'];
}; */

export const handleRequestError = (error: any) => {
  const genericError = 'Generic error happened';
  if (!error) return genericError;

  if (error.response && error.response.data) {
    return error.response.data.errorMessage || error.message || genericError;
  }

  if (error.message) return error.message;

  return genericError;
};
