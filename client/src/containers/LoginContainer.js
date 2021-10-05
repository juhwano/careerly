import React, { useCallback, useState } from 'react';
import LoginComponent from '../components/auth/LoginComponent';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/user_action';
import { useHistory } from 'react-router';

export default function LoginContainer({ setIsLoggined }) {
  const history = useHistory();
  // 디스패치
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const onChangeHandler = useCallback(
    (event) => {
      const { name, value } = event.target;
      console.log(name, value);
      setUserInfo({
        ...userInfo,
        [name]: value,
      });
    },
    [userInfo],
  );

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // 액션(loginUser) 사용 -> 결과값 promise -> true시 메인
    dispatch(loginUser(userInfo))
      .then((value) => {
        if (value.payload.loginSuccess) {
          setIsLoggined(true);
          history.push('/');
        } else {
          alert('error');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <LoginComponent
      userInfo={userInfo}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
}
