import React from 'react';
interface Theme {
    mode: 'light' | 'dark';
}
export interface ThemeProviderProps {
    children: React.ReactNode;
    className?: string;
    theme: Theme;
}
declare const ThemeProvider: ({ children, theme }: ThemeProviderProps) => JSX.Element;
export default ThemeProvider;
