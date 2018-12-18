import CONFIG from '../CONFIG';

const {
  INITIAL_STATE: { AUTH },
  ACTION_TYPES: { AUTH_USER, AUTH_ERR }
} = CONFIG;

export default function (state = AUTH, { type, payload }) {
  switch (type) {
    case AUTH_USER:
      return { ...state, authenticated: payload };
      case AUTH_ERR:
      return { ...state, errorMessage: payload };
    default:
      return state;
  }
}