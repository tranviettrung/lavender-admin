import axios from 'axios';
import cookie from 'js-cookie';

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
      cookie.set('token', res.data.token,  { expires: 2 });
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

export const loadAuthUser = () => dispatch => new Promise((resolve, reject) => {
  axios.get('/user')
    .then(res => {
      dispatch({
        type: LOAD_AUTH_USER,
        payload: res.data,
      });
      resolve();
    })
    .catch(err => {
      reject();
    });
});