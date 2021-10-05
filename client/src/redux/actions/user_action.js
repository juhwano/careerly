import axios from 'axios';
import address from '../../config/uriConfig.json';
import { LOGIN_USER, SIGNUP_USER } from './types';
// userInfo를 파라미터로 받는다
export async function loginUser(dataToSubmit) {
  // request 통신 진행
  try {
    const result = await axios({
      method: 'POST',
      url: `${address.uri}/ssac/auth/login`,
      data: dataToSubmit,
    });
    if (result.status === 200) {
      return {
        type: LOGIN_USER,
        payload: result.data,
      };
    }
  } catch (error) {
    console.error(error);
  }
}

export async function signUpUser(dataToSubmit) {
  // request 통신 진행
  try {
    const result = await axios({
      method: 'POST',
      url: `${address.uri}/ssac/auth/signup`,
      data: dataToSubmit,
    });
    if (result.status === 200) {
      return {
        type: SIGNUP_USER,
        payload: result.data,
      };
    }
  } catch (error) {
    console.error(error);
  }
}
