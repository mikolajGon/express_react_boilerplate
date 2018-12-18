const INITIAL_STATE = {
  AUTH: {
    authenticated: localStorage.getItem('token'),
    errorMessage: ''
  }
}

const ACTION_TYPES = {
  AUTH_USER: 'auth_user',
  AUTH_ERR: 'auth_err',
}

const CONFIG = {
  INITIAL_STATE,
  ACTION_TYPES
}

export default CONFIG;