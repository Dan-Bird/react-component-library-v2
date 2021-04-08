import React from 'react';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border: 1px solid black;
  padding: 16px;
  width: 360px;
  text-align: center;
  ${props =>
    props.theme === 'secondary' &&
    css`
      background-color: black;
      color: white;
    `}
`;

export const Heading = styled.h1`
  font-size: 64px;
`;
