import styled, { css } from 'styled-components';
import { TestComponentProps } from './TestComponent';

export const Container = styled.div<TestComponentProps>`
  background-color: white;
  border: 1px solid black;
  padding: 16px;
  width: 360px;
  text-align: center;
  ${({ mode }) =>
    mode === 'secondary' &&
    css`
      background-color: black;
      color: white;
    `}
`;

export const Heading = styled.h1`
  font-size: 64px;
`;
