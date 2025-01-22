import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'https://api-gazette.onrender.com/api/v1',
});

export function addTokenJwtToAxiosInstance(token: string) {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function removeTokenJwtFromAxiosInstance() {
  axiosInstance.defaults.headers.common.Authorization = '';
}

export default axiosInstance;