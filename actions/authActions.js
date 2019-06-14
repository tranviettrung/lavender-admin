import axios from 'axios';

/*
 * action types 
 */
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

/*
 * action creators
 */
export const login = ({email, password}) => dispatch => {
  const userCredential = JSON.stringify({email, password});
  axios.post('/login', userCredential)
    .then(res => {
      
    })
    .catch(err => {

    });
}