import axios from 'axios';
import {REG_SUCCESS,REG_FAILURE , USER_LOADED,AUTH_ERROR} from './types';
import {setAlert} from './alert';
import setAuthToken from '../utils/setAuthToken'

// load user
export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try{
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });

    } catch(err){
        dispatch({
            type: AUTH_ERROR
        })
    }
}


//This action will register user
export const register = ({ name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password });
    try{
        const res = await axios.post('/api/users',body,config);
        dispatch({
           type: REG_SUCCESS,
           payload: res.data
        });
    }catch(err){
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(
                setAlert(error.msg,'danger')
            ));
        }

        dispatch({
           type: REG_FAILURE
        });
    }
}
