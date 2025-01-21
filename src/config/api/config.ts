import axios from 'axios';

const BASE_URL = 'https://energoinspector.uz/api/'


const axiosCli = axios.create({
  baseURL: import.meta.env.VITE_API_URL || BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzMzc4MTI0LCJpYXQiOjE3MzA3ODYxMjQsImp0aSI6Ijc1NTM2ZWIxMGY4OTQ2OWY5MWNkYjI4NWIxYzJiODcxIiwidXNlcl9pZCI6Nzg4fQ.hf_Ip9tfznl_GBWTAvQJqxMyFXtYnu0yAm-qcxOdQYw`,
  },
});

export default axiosCli;
