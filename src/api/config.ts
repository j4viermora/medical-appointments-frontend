import axios from 'axios';

export const appRequest = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('auth-token'),
  },
});
