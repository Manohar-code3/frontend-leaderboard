import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://leaderbackend-22ds.onrender.com/api',
});
