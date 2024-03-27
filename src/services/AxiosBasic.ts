import axios from 'axios';
import { DeviceEventEmitter } from 'react-native';

export const Axios = axios.create({
    baseURL: 'http://172.27.176.1:3000/',
    timeout: 10000,
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json',
    },
    
})

Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

Axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  const code = error.status || error.response.status;
  if(code == 401 || code == 403)
  {
    DeviceEventEmitter.emit('logout', {message: 'success'})
  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});