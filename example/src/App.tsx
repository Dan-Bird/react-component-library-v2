import React from 'react';
import {
  TestComponent,
  PrimaryButton,
  SecondaryButton,
  RedTitle,
  GlobalStyle,
  Icon,
  ThemeProvider,
  ThemedComponent,
} from 'react-component-library';

const App = () => {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyle />
      <Icon icon='bell' size='medium' />
      <Icon icon='bookmark' size='large' className='bookmark-icon' />
      <TestComponent mode='primary' />
      <TestComponent mode='secondary' />
      <ThemedComponent />
      <PrimaryButton onClick={() => console.log('clicked')}>
        Primary Button
      </PrimaryButton>
      <SecondaryButton onClick={() => console.log('clicked')}>
        Secondary Button
      </SecondaryButton>
      <RedTitle>Red Title</RedTitle>
      <div>Working</div>
    </ThemeProvider>
  );
};

export default App;
