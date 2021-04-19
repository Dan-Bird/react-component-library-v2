import React from 'react';
export declare type ThemeMode = 'light' | 'dark';
export declare type ThemeProviderProps = {
    children: React.ReactNode;
    /**
     * An object to describe the theme of the application.
     */
    theme: {
        mode?: ThemeMode;
    };
};
declare const ThemeProvider: ({ children, theme, }: ThemeProviderProps) => JSX.Element;
export default ThemeProvider;
