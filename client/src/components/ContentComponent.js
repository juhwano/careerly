import React from 'react';
import ContentItemComponent from './ContentItemComponent';

export default function ContentComponent() {
  return (
    <div className="콘텐츠컨테이너">
      <div className="콘텐츠무한스크롤링박스">
        <div className="콘텐츠무한스크롤링아이템">
          <ContentItemComponent />
        </div>
      </div>
    </div>
  );
}
