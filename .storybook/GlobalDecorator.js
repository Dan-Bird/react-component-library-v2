import * as React from 'react';
import GlobalStyle from '../src/design-system/globalStyles';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const StoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto 1rem;
  padding: 1rem;
  width: 100%;
`;

const StoryHeading = styled.h2`
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`;

const StoryContainer = ({ children, description }) => (
  <StoryWrapper>
    <StoryHeading>{description}</StoryHeading>
    {children}
  </StoryWrapper>
);

const GlobalDecorator = ({ Story }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ mode: 'light' }}>
      <StoryContainer description='Light theme'>
        <Story />
      </StoryContainer>
    </ThemeProvider>
    <ThemeProvider theme={{ mode: 'dark' }}>
      <StoryContainer description='Dark theme'>
        <Story />
      </StoryContainer>
    </ThemeProvider>
  </>
);

export default GlobalDecorator;
