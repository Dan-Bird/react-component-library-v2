import React from 'react';
import {
  TestComponent,
  PrimaryButton,
  BaseButton,
} from 'react-component-library';

const App = () => {
  return (
    <>
      <TestComponent theme='primary' />
      <TestComponent theme='secondary' />
      <PrimaryButton onClick={() => console.log('clicked')}>
        Primary Button
      </PrimaryButton>
      <BaseButton onClick={() => console.log('clicked')}>
        Primary Button
      </BaseButton>
      <div>Working</div>
    </>
  );
};

export default App;
