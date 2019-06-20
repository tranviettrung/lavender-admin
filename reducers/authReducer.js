import {
  LOGIN_SUCCESS,
  LOAD_AUTH_USER,
} from '../actions/authActions';
import cookie from 'js-cookie';

let token = cookie.get('token');
const initialState = {
  token: token,
  isAuthenticated: null,
  user: null,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      }
    case LOAD_AUTH_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}