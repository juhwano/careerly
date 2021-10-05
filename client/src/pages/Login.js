import React from 'react';
import LoginContainer from '../containers/LoginContainer';

export default function Login({ setIsLoggined }) {
  return <LoginContainer setIsLoggined={setIsLoggined} />;
}
