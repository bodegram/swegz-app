import Axios from 'axios';
import * as SecureStore from 'expo-secure-store';


const baseURL: string = 'https://swegz-test-server.onrender.com/api';

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
