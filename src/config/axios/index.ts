import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'https://energoinspector.uz/api/v1/base/web',
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
  geoJson: '/regions/',  //get
};



export default apiClient;
