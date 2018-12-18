import { ACTION_TYPES, INITIAL_STATE } from '../CONFIG';

const { AUTH_USER, AUTH_ERR } = ACTION_TYPES;

export default function (state = INITIAL_STATE.auth, { type, payload }) {
  switch (type) {
    case AUTH_USER:
      return { ...state, authenticated: payload };
      case AUTH_ERR:
      return { ...state, errorMessage: payload };
    default:
      return state;
  }
}