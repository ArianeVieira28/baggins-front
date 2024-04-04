import axios from 'axios';

// const apiUrl = 'http://localhost:3333';
const apiUrl = 'http://api.baggins.ml';

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
});

export const url = apiUrl;

export default api;
