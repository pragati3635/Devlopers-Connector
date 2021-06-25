import {REG_SUCCESS , REG_FAILURE , USER_LOADED,AUTH_ERROR} from '../actions/types';

const initialState = {
    token : localStorage.getItem('token'),
    isAuthenticated : null,
    loading : true,
    user : null
}

export default function(state = initialState , action) {
    const {type , payload } = action;

    switch(type) {
        case REG_SUCCESS:
            localStorage.setItem('token',payload.token);
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading : false
            }
        case REG_FAILURE:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        default:
            return state;

    }

}