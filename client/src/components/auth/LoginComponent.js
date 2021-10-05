import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginComponent({
  userInfo,
  onChangeHandler,
  onSubmitHandler,
}) {
  const { email, password } = userInfo;
  return (
    <div className="회원가입박스">
      <div className="로그인_헤더">
        <h3>로그인</h3>
      </div>
      <div className="회원가입_텍스트">
        <p>아직 회원이 아니신가요? 5초 만에</p>
        <Link to="/signup">
          <p className="회원일시_로그인">
            <u>가입하기</u>
          </p>
        </Link>
      </div>
      <div className="회원가입_폼박스">
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              name="email"
              placeholder="이메일 입력"
              value={email}
              onChange={onChangeHandler}
            />
            <div></div>
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              type="text"
              name="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={onChangeHandler}
            />
            <div></div>
          </div>
          <div className="소셜로그인">
            <button type="submit" className="이메일로_시작">
              이메일로 계속하기
            </button>
            <div className="또는">
              <div></div>
              <p>또는</p>
              <div></div>
            </div>
            <button className="카카오로그인">
              <img
                src="https://careerly.co.kr/_next/static/images/icn_kakao-7df1f24555595c3382cda634c4ecf920.png"
                alt="kakao-logo"
              />
              카카오로 계속하기
            </button>
            <button className="애플로그인">
              <img
                src="https://careerly.co.kr/_next/static/images/icn_apple-5c0fa1f05c3f450aa51cc03cadfcc333.png"
                alt="apple-logo"
              />
              Apple로 계속하기
            </button>
            <div className="고객센터박스">
              <Link to="/customer" alt="customer-center">
                <p>
                  <u>고객센터</u>
                </p>
              </Link>
              <Link to="/lost" alt="forget-password">
                <p>
                  <u>비밀번호 찾기</u>
                </p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
