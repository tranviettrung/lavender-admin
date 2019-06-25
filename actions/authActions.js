import axios from 'axios';
import cookie from 'js-cookie';
import { clientConfig } from '../lib/client';

/*
 * action types 
 */
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOAD_AUTH_USER = 'LOAD_AUTH_USER';
export const REAUTHENTICATE = 'REAUTHENTICATE';

/*
 * action creators
 */
export const login = ({email, password}) => dispatch => new Promise((resolve, reject) => {
  const userCredential = JSON.stringify({email, password});
  axios.post('/login', userCredential)
    .then(res => {
      cookie.set('token', res.data.token,  { expires: 365 });
      clientConfig(res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        user: res.data.user,
        token: res.data.token
      })
      resolve();
    })
    .catch(err => {
      reject();
    });
});

export const reauthenticate = (token) => {
  return {
    type: REAUTHENTICATE,
    payload: token
  }
}

export const loadAuthUser = () => async dispatch => {
  await axios.get('/user')
    .then(res => {
      dispatch({
        type: LOAD_AUTH_USER,
        payload: res.data,
      });
      // resolve();
      console.log('success load user');
    })
    .catch(err => {
      // reject();
      console.log('err load user');
    });
};