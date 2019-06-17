import axios from 'axios';

export default axios.create({
    baseURL: 'http://lavender.test/api',
    headers: {
        'Content-Type': 'application/json'
    }
}); 