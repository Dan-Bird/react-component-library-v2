import React from 'react';
import { Theme } from '../ThemeProvider/ThemeProvider';
import { Container } from './ThemedComponent.styles';

interface ThemedComponentProps {
  theme?: Theme;
}

const ThemedComponent = ({
  theme = { mode: 'light' },
}: ThemedComponentProps) => (
  <Container>
    <h1>I'm a themed component</h1>
    <p>Current theme is: {theme.mode}</p>
  </Container>
);

export default ThemedComponent;
