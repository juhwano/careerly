import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomerComponent() {
  return (
    <div className="고객센터_블록">
      <div className="고객센터_헤더">
        <p className="고객센터_헤더__텍스트헤더">무엇이든 물어보세요!</p>
        <p className="고객센터_헤더__텍스트콘텐츠">
          휴일을 제외한 평일에는 최대한 빨리 답변 드리겠습니다.
          <br /> 혹시 하루가 지나도 답변이 오지 않으면, 바쁜 것입니다.
        </p>
        <Link className="고객센터_헤더__링크">자주 묻는 질문</Link>
      </div>
      <form>
        <div className="고객센터_콘텐츠">
          <input
            className="고객센터_콘텐츠--이메일"
            type="text"
            placeholder="이메일을 입력해 주세요"
          />
          <div className="고객센터_콘텐츠--질문">
            <select name="" id="" className="고객센터_콘텐츠--선택">
              <option value disabled hidden>
                질문 유형을 선택해주세요.
              </option>
              <option value="question">이용 문의</option>
              <option value="report">오류 신고</option>
              <option value="service_suggestion">서비스 제안</option>
              <option value="extra">기타</option>
            </select>
          </div>
          <div>
            <textarea
              name=""
              id=""
              className="고객센터_콘텐츠--내용"
              cols="30"
              rows="10"
              placeholder="내용을 적어주세요."
            ></textarea>
          </div>
          <div className="고객센터_콘텐츠__체크박스">
            <input type="checkbox" />
            <label for="email-agree"></label>
            <div>
              보내주신 질문에 답변드리기 위해 이메일 정보 제공에 동의해 주시기
              바랍니다.
            </div>
          </div>
          <button type="button" className="고객센터_콘텐츠__제출">
            보내기
          </button>
        </div>
      </form>
    </div>
  );
}
