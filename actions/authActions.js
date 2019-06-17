import axios from '../lib/axios-instance';
import cookie from 'js-cookie';

/*
 * action types 
 */
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

/*
 * action creators
 */
export const login = ({email, password}) => dispatch => new Promise((resolve, reject) => {
  const userCredential = JSON.stringify({email, password});
  axios.post('/login', userCredential)
    .then(res => {
      cookie.set('token', res.data.token);
      resolve();
    })
    .catch(err => {
      reject();
    });
});