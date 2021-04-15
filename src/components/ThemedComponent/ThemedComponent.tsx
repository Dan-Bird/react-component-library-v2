import React from 'react';
import { Theme } from '../ThemeProvider/ThemeProvider';
import { Container } from './ThemedComponent.styles';

export interface ThemedComponentProps {
  /**
   * Colour mode for the app. Represented in as an object with a 'mode' property set to a string of either 'light' or 'dark'.
   */
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
