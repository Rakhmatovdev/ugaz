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

const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM5MDEzNDQwLCJpYXQiOjE3Mzg5MjcwNDAsImp0aSI6ImM5OTM5ODZmZGIyNzQ0ZTc5NzVmMWQwYTQwNGUyYjkwIiwidXNlcl9pZCI6MjMzOX0.L0faqHbau6seabi4Jy-uox_BA7UNbWYaBnDvNlJI9RI"

export default apiClient;
const accessToken = localStorage.getItem('accessToken');

export const allService = axios.create({
  baseURL: 'https://api.my-agnks-dev.xdevs.uz/api/v1/',
  timeout: 10000,
  headers:{
    'Content-Type':'application/json',
    Authorization: `Bearer ${accessToken}`,
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
  transaction_statistic:"billing/statistics/transaction_statistic/", //get
  fuel_dispensers:"admin-statistics/stations/fuel-dispensers/", //get
  branches:"filling_stations/branches/", //get
  kalonkalar:["equipments/branches/","/fuel_dispensers/station_branch_fueldispensers_for_inspectors/"], //get
  contract_statistic_by_region:"billing/statistics/contract_statistic_by_region/", //get
  station_detail:'admin-statistics/stations/map-statistics/station_detail/',  //get
  dispensers_detail:'admin-statistics/stations/fuel-dispensers/dispensers_detail',//get              
  dispensers_list:'admin-statistics/stations/fuel-dispensers/dispensers_list/', //get
};