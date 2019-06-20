import axios from 'axios';
import cookie from 'js-cookie';
import { requestConfig } from '../config/default';

const token = cookie.get('token');

export default axios.create({
    baseURL: requestConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
    }
}); 