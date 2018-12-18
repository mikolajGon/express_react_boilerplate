import axios from 'axios';
import CONFIG from '../CONFIG';

const { ACTION_TYPES: { AUTH_USER, AUTH_ERR } } = CONFIG;

// export const signup = ({ email, password }) => {
//  return (dispatch) => {
// same same as below. strangely lloking SyntaxError, but the same as one line af
//  axios.post('http://localhost:3090/signup', {
//   email, password
// });
//   }
// };

export const signup = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post(
      'http://localhost:3090/signup',
      formProps
    );

    dispatch({ type: AUTH_USER, payload: res.data.token });
    localStorage.setItem('token', res.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERR, payload: 'Email in use' });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post(
      'http://localhost:3090/signin',
      formProps
    );

    dispatch({ type: AUTH_USER, payload: res.data.token });
    localStorage.setItem('token', res.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERR, payload: 'Invalid email or password' });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  }
}