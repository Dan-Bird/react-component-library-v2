import { createGlobalStyle } from 'styled-components';
import { colours, typography } from './index';

const GlobalStyle = createGlobalStyle`
  :root {
    ${colours}
    ${typography}
  }
  @font-face {
    font-family: 'abril_fatface';
    src: url('./assets/fonts/abrilfatface-regular.woff2') format('woff2'),
         url('./assets/fonts/abrilfatface-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalStyle;
