import React from 'react';
import { ThemeMode } from '../ThemeProvider/ThemeProvider';
import { withTheme } from 'styled-components';
import { Container } from './ThemedComponent.styles';

interface ThemedComponentProps {
  theme: {
    mode: ThemeMode;
  };
}

const ThemedComponent = ({ theme: { mode } }: ThemedComponentProps) => (
  <Container>
    <h1>I'm a themed component</h1>
    <p>Current theme is: {mode}</p>
  </Container>
);

export default withTheme(ThemedComponent);
