import axios from 'axios';

export const dummiapy = axios.create({
  baseURL: 'https://dummyjson.com',
});
