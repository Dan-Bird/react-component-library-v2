import { Theme } from '../ThemeProvider/ThemeProvider';
export interface ThemedComponentProps {
    /**
     * Colour mode for the app. Represented in as an object with a 'mode' property set to a string of either 'light' or 'dark'.
     */
    theme?: Theme;
}
declare const ThemedComponent: ({ theme, }: ThemedComponentProps) => JSX.Element;
export default ThemedComponent;
