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
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4Mjk3MjY2LCJpYXQiOjE3MzgyMTA4NjYsImp0aSI6ImM1NmZhODg0Y2VjMjQ4YjJiMTJmYjhmMzM3MTAzN2EzIiwidXNlcl9pZCI6MjMzOX0.i2nsf6fINrCQvsTF9D2MGvCQlNBaPp7PwZRFSTA7dZg`,
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
  regions:"regions/regions/", //get
  sold_gas: 'admin-statistics/stations/gas-statistics/receive_sold_gas/',  //get
  cars_statics:'/admin-statistics/stations/map-statistics/violations_cars_statics/' ,//get
  stations_by_region:'admin-statistics/stations/map-statistics/stations_by_region/', //get
  contract_statistic_by_region:"billing/statistics/contract_statistic_by_region/", //get
  transaction_statistic:"billing/statistics/transaction_statistic/", //get

  station_detail:'admin-statistics/stations/map-statistics/station_detail/',  //get
  dispensers_detail:'admin-statistics/stations/fuel-dispensers/dispensers_detail',//get              
  dispensers_list:'admin-statistics/stations/fuel-dispensers/dispensers_list/', //get
};