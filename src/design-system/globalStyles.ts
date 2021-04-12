import { createGlobalStyle } from 'styled-components';
import { colours, typography } from './index';
import abrilfatface_woff from '../assets/fonts/abrilfatface-regular.woff';
import abrilfatface_woff2 from '../assets/fonts/abrilfatface-regular.woff2';

const GlobalStyle = createGlobalStyle`
  :root {
    ${colours}
    ${typography}
    font-family: 'abril_fatface', sans-serif;
  }
  @font-face {
    font-family: 'abril_fatface';
    src: url(${abrilfatface_woff}) format('woff'),
         url(${abrilfatface_woff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

`;

export default GlobalStyle;
