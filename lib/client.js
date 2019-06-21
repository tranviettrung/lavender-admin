import axios from 'axios';
import { requestConfig } from '../config/default';

export function clientConfig(token = null) {
    axios.interceptors.request.use(function (config) {
        config.baseURL = requestConfig.baseUrl;
        config.headers['Authorization'] = token ? `Bearer ${token}` : '';
        config.headers['Content-Type'] = 'application/json';
        return config;
      }, function (error) {
        // Do something with request error
        // return Promise.reject(error);
      });
};