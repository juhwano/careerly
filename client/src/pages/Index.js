import React from 'react';
import ContentContainer from '../containers/ContentContainer';
import ItemContainer from '../containers/ItemContainer';
import SignUpContainer from '../containers/SignUpContainer';

export default function Index({ isLoggined }) {
  return (
    <>
      {!isLoggined ? (
        <>
          <SignUpContainer />
          <ItemContainer />
        </>
      ) : (
        <>
          <ContentContainer />
        </>
      )}
    </>
  );
}
