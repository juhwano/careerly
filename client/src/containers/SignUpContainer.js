import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import SignUpComponent from '../components/auth/SignUpComponent';
import { signUpUser } from '../redux/actions/user_action';

export default function SignUpContainer() {
  const history = useHistory();
  // 디스패치
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    name: '',
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

    dispatch(signUpUser(userInfo))
      .then((value) => {
        if (value.payload.loginSuccess) {
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
    <SignUpComponent
      userInfo={userInfo}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
}
