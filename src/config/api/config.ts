import axios from 'axios';

const BASE_URL = 'https://energoinspector.uz/api/'
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM4Mzg2MDc1LCJpYXQiOjE3MzgyOTk2NzUsImp0aSI6IjQzOTQwN2JiZjlkNDQ3YThhNWVmY2FjZDIzNmY0NjhjIiwidXNlcl9pZCI6MjMzOX0.rsnBDgN2lA1cFm8OJj4tKvSLLNo3jE5tQg3TsGxKw10"

const axiosCli = axios.create({
  baseURL: import.meta.env.VITE_API_URL || BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export default axiosCli;
