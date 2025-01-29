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


export const allService = axios.create({
  baseURL: 'https://api.my-agnks-dev.xdevs.uz/api/v1/',
  timeout: 10000,
  headers:{
    'Content-Type':'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4MTQ0MjU3LCJpYXQiOjE3MzgwNTc4NTcsImp0aSI6IjVlNjhhZjBjMGM0NzRiMjNhMjdkOGNmZTdhODczOWMyIiwidXNlcl9pZCI6NjQ2fQ.vDXe1S8AMruBPeZkm8rbdAXEDCy4RjMLhk12naILvfE`,
  },
})

allService.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const points = {
  sold_gas: 'admin-statistics/stations/gas-statistics/receive_sold_gas/',  //get
  station_detail:'admin-statistics/stations/map-statistics/station_detail/',  //get
  dispensers_detail:'admin-statistics/stations/fuel-dispensers/dispensers_detail',//get              
  cars_statics:'/admin-statistics/stations/map-statistics/violations_cars_statics/' ,//get
  dispensers_list:'admin-statistics/stations/fuel-dispensers/dispensers_list/', //get
};