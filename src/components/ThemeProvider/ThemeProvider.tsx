import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export type ThemeMode = 'light' | 'dark';

export type ThemeProviderProps = {
  children: React.ReactNode;
  /**
   * An object to describe the theme of the application.
   */
  theme: {
    mode?: ThemeMode;
  };
};

const ThemeProvider = ({
  children,
  theme = { mode: 'light' },
}: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export default ThemeProvider;
