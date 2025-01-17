import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'http://localhost:7777/api',
  timeout: 10000,
  headers:{'Content-Type':'application/json'},
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const endpoints = {
    uzbekistan_borders: '/data/uzbekistan-borders', //get
  geoJson: '/data/geoJson/',  //get
};



export default apiClient;
