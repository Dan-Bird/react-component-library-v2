import styled, { css } from 'styled-components';
import theme from 'styled-theming';

export const Container = styled.div`
  ${theme('mode', {
    light: css`
      background-color: lightgray;
      color: black;
    `,

    dark: css`
      background-color: darkblue;
      color: gold;
    `,
  })}
`;
