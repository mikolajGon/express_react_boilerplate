export const INITIAL_STATE = {
  auth: {
    authenticated: localStorage.getItem('token'),
    errorMessage: ''
  }
};

export const ACTION_TYPES = {
  AUTH_USER: 'auth_user',
  AUTH_ERR: 'auth_err'
};