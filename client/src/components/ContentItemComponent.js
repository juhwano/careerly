import React from 'react';

export default function ContentItemComponent() {
  return (
    <div className="콘텐츠아이템">
      <a className="콘텐츠아이템__프로필박스">
        <div className="콘텐츠아이템__프로필">
          <img
            src="https://k.kakaocdn.net/dn/Hp3Dt/btqYurlr4WR/YEJ7hfi2LHRodSNyni8Kr1/img_640x640.jpg?w=200&h=200"
            alt="profile_image"
          />
        </div>
        <div className="콘텐츠아이템__직업">
          <p>
            <span>김지원</span>소프트웨어 엔지니어
          </p>
          <p>13시간 전</p>
        </div>
      </a>
      <div className="콘텐츠아이템__텍스트">
        <div>
          <p>
            &lt;&lt;하루 8시간만 일하면 정말 행복할까?&gt;&gt;
            <br />
            <br />
            여러분은 '워라밸이 좋다'라는 말을 들으면 어떤 상황이 떠오르나요?
            <br />
            정시퇴근 하기, 좋은 시설 등 다양한 답변이 나올 것입니다. <br />
            52시간 근무를 하면서 매번 정시퇴근을 해도, 할일이 남아서 집에서
            생각하고, 정리하는 삶
            <span>
              ...
              <span>더 보기</span>
            </span>
          </p>
        </div>
      </div>
      <div className="콘텐츠아이템__기사">
        <a href="https://brunch.co.kr/@blueglass/84">
          <div>
            <div className="콘텐츠아이템__기사제목">
              <h6>워라밸에 대한 짧은 단상</h6>
              <p>brunch</p>
            </div>
            <div className="콘텐츠아이템__기사링크">
              <img
                src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/94td/image/HUtxPzN0I6a3m9ddBgm6j4txgG4.jpg"
                alt="content_link"
              />
            </div>
          </div>
        </a>
      </div>
      <a href="" className="콘텐츠아이템__상태">
        <div>
          <img
            src="https://k.kakaocdn.net/dn/hHLCI/btq5HCVAFs0/Qy2R0t8M73ksiTre126xG1/img_640x640.jpg?w=200&h=200"
            alt="other_people_profile"
          />
        </div>
        <div>
          <img
            src="https://publy.imgix.net/user-uploaded/56962/2021.09/20210921075014.jpeg?w=200&h=200"
            alt="other_people_profile"
          />
        </div>
        <div>
          <img
            src="https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png"
            alt="other_people_profile"
          />
        </div>
        <p className="콘텐츠아이템__추천수">
          <span>
            <span>119 명</span>이 추천했어요.
          </span>
        </p>
      </a>
      <div className="콘텐츠아이템__추천">
        <a href="">
          <div>
            <img src="" alt="" />
          </div>
        </a>
        <div>
          <div>
            <a href="">
              <div>
                <img src="" alt="" />
              </div>
              <p></p>
              <p></p>
              <div></div>
            </a>
          </div>
          <a href="">
            <div>
              <img src="" alt="" />
            </div>
            <p></p>
          </a>
        </div>
      </div>
    </div>
  );
}
