import { Theme } from '../ThemeProvider/ThemeProvider';
interface ThemedComponentProps {
    theme?: Theme;
}
declare const ThemedComponent: ({ theme, }: ThemedComponentProps) => JSX.Element;
export default ThemedComponent;
