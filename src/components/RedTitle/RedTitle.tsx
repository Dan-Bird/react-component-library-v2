import BaseTitle, { BaseTitleProps } from '../BaseTitle/BaseTitle';
import { fontLarge } from '../../design-system';
import styled from 'styled-components';

const RedTitle = styled(BaseTitle)<BaseTitleProps>`
  ${fontLarge}
  text-decoration: underline;
`;

export default RedTitle;
