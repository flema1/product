import axios from 'axios';
import Auth from '../modules/Auth';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_LOGIN_PENDING
} from './constants/user.constants';

function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: LOGIN_SUCCESS,
    payload:isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: LOGIN_ERROR,
    loginError
  }
}


export const login = (email, password) => 
 dispatch => {
    console.log(email, " ", password, " ", "in auth actions");
    axios.post(`/auth/signin`, { email, password})
      .then((res) => {
        console.log(res, 'fE, log in')
        dispatch(setLoginSuccess(true));
        sessionStorage.setItem('API_TOKEN', res.data.token);
      })
      .catch((err) => {
        //console.log(error, 'err, fE, regis')
        //console.log(err.response.data);
        //console.log(err.response.status);
        //dispatch(setLoginError(err.response.status));
      })
  }
  
export const register = (user) => dispatch => {
  if (user.password === user.confirmPassword) {
    console.log('reistering', user);
    axios.post(`/auth/register`, user)
      .then((res) => {
        console.log(res, 'fE, regis')
        dispatch(setLoginSuccess(true));
        //Auth.authenticateToken(res.data.token);
        sessionStorage.setItem('API_TOKEN', res.data.token);
        //      return loginUserSuccess(dispatch, user.uid);
      })
      .catch((err) => {
        //console.log(error, 'err, fE, regis')
        //console.log(err.response.data);
        //console.log(err.response.status);
        //dispatch(setLoginError(err.response.status));
      })
  } else {
    console.log('not reistering');
    //dispatch(setLoginError());
    // const error = 'Passwords do not match'
    // loginUserFail(dispatch, error);
  }
};



function logOut() {
  return {
     type: 'LOGOUT'
  };
}



export const logOutUser=()=>dispatch=>{
  sessionStorage.removeItem('API_TOKEN');
  dispatch(logOut())
}
