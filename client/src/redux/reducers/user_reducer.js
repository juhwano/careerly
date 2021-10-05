import { LOGIN_USER, SIGNUP_USER } from '../actions/types';

export default function user_reducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        login: action.payload,
      };
    case SIGNUP_USER:
      return {
        ...state,
        register: action.payload,
      };

    default:
      return state;
  }
}
