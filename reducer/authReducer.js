import {
    LOGIN_SUCCESS
} from '../actions/authActions';

const initialState = {
    token: localStorage.getItem('token'),
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
    }
}