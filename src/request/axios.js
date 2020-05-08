import axios from 'axios';

var instance = axios.create({
  timeout: 5000,
  baseURL: '/lease',
});

instance.interceptors.response.use((response) => {
  return response.data;
});

export default instance;