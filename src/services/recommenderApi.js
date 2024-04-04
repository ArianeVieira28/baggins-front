import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://recsys.baggins.ml',
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
