import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface Theme {
  mode: 'light' | 'dark';
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  className?: string;
  theme: Theme;
}

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export default ThemeProvider;
