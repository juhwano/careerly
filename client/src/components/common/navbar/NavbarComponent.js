import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineComment,
  AiOutlineMenu,
} from 'react-icons/ai';

export default function NavbarComponent({ isLoggined }) {
  return (
    <nav className="전체네비박스">
      <div className="정렬네비박스">
        <div className="홈_프로필탐색_인턴채용공고">
          <Link to="/" className="로고박스">
            <img className="로고" src="ssac-logo.png" alt="logo" />
            <img className="모바일로고" src="small-logo.png" alt="mobileLogo" />
          </Link>
          <div className="프로필탐색_인턴채용공고">
            <Link to="/discover" className="카테고리">
              <p>프로필 탐색</p>
            </Link>
            <Link to="/jobs" className="카테고리">
              <p>인턴 채용공고</p>
            </Link>
          </div>
        </div>
        {/* 비로그인 */}
        {!isLoggined ? (
          <>
            <div className="비로그인_회원가입">
              <Link to="/login">
                <button className="로그인">로그인</button>
              </Link>
              <Link to="/signup">
                <button className="회원가입">회원가입</button>
              </Link>
              <button class="햄버거박스">
                <img
                  className="햄버거"
                  src="hamburger.svg"
                  alt="hamburger_menu"
                />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="로그인_회원가입">
              <div className="로그인_돋보기">
                <AiOutlineSearch />
              </div>
              <a href="" className="로그인_채팅">
                <AiOutlineComment />
              </a>
              <a href="" className="로그인_알람">
                <AiOutlineBell />
              </a>
              <div className="로그인_이미지컨테이너">
                <button className="로그인_이미지버튼">
                  <div className="로그인_이미지박스">
                    <img
                      className="로그인_이미지"
                      src="https://k.kakaocdn.net/dn/hbtdF/btrfPI4e45P/MXecvfM3k3xnLcl7Ils531/img_640x640.jpg?w=200&h=200"
                      alt="profile_image"
                    />
                  </div>
                </button>
                <div className="로그인_드랍박스">
                  <button className="로그인_드랍아이템">
                    <p>내 프로필</p>
                  </button>
                  <a href="" className="로그인_드랍링크">
                    <p>로그아웃</p>
                  </a>
                </div>
              </div>
              <button className="로그인_햄버거">
                <AiOutlineMenu />
              </button>
            </div>
          </>
        )}
        {/* <div className="비로그인_회원가입">
          <Link to="/login">
            <button className="로그인">로그인</button>
          </Link>
          <Link to="/signup">
            <button className="회원가입">회원가입</button>
          </Link>
          <button class="햄버거박스">
            <img className="햄버거" src="hamburger.svg" alt="hamburger_menu" />
          </button>
        </div> */}

        {/* 로그인 */}
        {/* <div className="로그인_회원가입">
          <div className="로그인_돋보기">
            <AiOutlineSearch />
          </div>
          <a href="" className="로그인_채팅">
            <AiOutlineComment />
          </a>
          <a href="" className="로그인_알람">
            <AiOutlineBell />
          </a>
          <div className="로그인_이미지컨테이너">
            <button className="로그인_이미지버튼">
              <div className="로그인_이미지박스">
                <img
                  className="로그인_이미지"
                  src="https://k.kakaocdn.net/dn/hbtdF/btrfPI4e45P/MXecvfM3k3xnLcl7Ils531/img_640x640.jpg?w=200&h=200"
                  alt="profile_image"
                />
              </div>
            </button>
            <div className="로그인_드랍박스">
              <button className="로그인_드랍아이템">
                <p>내 프로필</p>
              </button>
              <a href="" className="로그인_드랍링크">
                <p>로그아웃</p>
              </a>
            </div>
          </div>
          <button className="로그인_햄버거">
            <AiOutlineMenu />
          </button>
        </div> */}
      </div>
    </nav>
  );
}
