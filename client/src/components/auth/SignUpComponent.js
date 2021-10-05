import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpComponent({
  userInfo,
  onChangeHandler,
  onSubmitHandler,
}) {
  const { name, email, password } = userInfo;
  return (
    <div className="회원가입박스">
      <div className="회원가입_헤더">
        <h1>싹</h1>
        <h3>꿈꾸는 개발자들의 커리어 SNS</h3>
      </div>
      <div className="회원가입_텍스트">
        <p>앗! 이미 회원이신가요?</p>
        <Link to="/login">
          <p className="회원일시_로그인">
            <u>로그인하기</u>
          </p>
        </Link>
      </div>
      <div className="회원가입_폼박스">
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="name">이름</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="프로필 이름"
              onChange={onChangeHandler}
            />
            <div></div>
          </div>
          <div>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="example@ssac.com"
              onChange={onChangeHandler}
            />
            <div></div>
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="영문, 숫자 포함 6자 이상"
              onChange={onChangeHandler}
            />
            <div></div>
          </div>
          <div className="소셜로그인">
            <p>
              아래 '회원가입'버튼을 누름으로써 싹의
              <Link to="/privacy" className="privacy">
                개인정보 처리방침
              </Link>
              에 동의합니다.
            </p>
            <button type="submit" className="이메일로_시작">
              이메일로 시작하기
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
              카카오로 시작하기
            </button>
            <Link to="/customer" className="고객센터" alt="customer-center">
              <p>
                <u>고객센터</u>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
