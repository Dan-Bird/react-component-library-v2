import React from 'react';
import {
  TestComponent,
  PrimaryButton,
  SecondaryButton,
  RedTitle,
  GlobalStyle,
} from 'react-component-library';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TestComponent theme='primary' />
      <TestComponent theme='secondary' />
      <PrimaryButton onClick={() => console.log('clicked')}>
        Primary Button
      </PrimaryButton>
      <SecondaryButton onClick={() => console.log('clicked')}>
        Secondary Button
      </SecondaryButton>
      <RedTitle>Red Title</RedTitle>
      <div>Working</div>
    </>
  );
};

export default App;
