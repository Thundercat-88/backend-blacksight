import axios from 'axios'
import setAuthToken from '../Utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import {GET_ERRORS, SET_CURRENT_USER} from './types'


//Register
export const registeruser = (userData, history) => dispatch => {
    axios
    .post('./api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => 
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        }))
};

//Login and get user token
export const loginUser = userData => dispatch => {
    axios
    .post('/api/users/login', userData)
    .then(res => {
    // Save to local
    const {token} = res.data;
    // Set token to ls
    localStorage.setItem('jwtToken', token);
    // Set token to auth header
    setAuthToken(token);
    // Decode token to get user data
    const decoded = jwt_decode(token);
    // Set current user
    dispatch(setCurrentUser(decoded));
    })
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        )
    }

// Set logged in user
export const setCurrentUser = (decoded) => {
    return  {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem('jwttoken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} and isAuthenticated to false
    dispatch(setCurrentUser({}));
};