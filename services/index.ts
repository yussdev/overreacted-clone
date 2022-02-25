import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 10000
});

export { postsAPI } from './posts';