import Axios from 'axios';
import * as SecureStore from 'expo-secure-store';


const baseURL: string = 'http://192.168.0.161:3000/api';

const api = Axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  async(config) => {
    const token =   await SecureStore.getItemAsync('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
