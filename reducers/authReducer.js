import {
  LOGIN_SUCCESS,
  LOAD_AUTH_USER,
  REAUTHENTICATE
} from '../actions/authActions';

const initialState = {
  token: null,
  isAuthenticated: null,
  user: null,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
        user: action.user
      }
    case LOAD_AUTH_USER:
      return {
        ...state,
        user: action.payload
      }
    case REAUTHENTICATE:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state;
  }
}