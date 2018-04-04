import { Cookies } from 'react-cookie';
import {
  AUTH_DISCARD_TOKEN,
  API_REQUEST_SEND,
  USER_REGISTER,
  USER_LOGIN,
  USER_LOGOUT,
  UPDATE_USER_PROFILE,
} from '../constants/ActionTypes';

const cookies = new Cookies();
let initialState = cookies.get('authState') || {};

export default function auth(state = initialState, action) {
  let authState = state;
  return authState;
};
