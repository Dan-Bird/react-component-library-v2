import BaseButton, { BaseButtonProps } from '../BaseButton/BaseButton';
import styled from 'styled-components';

const SecondaryButton = styled(BaseButton)<BaseButtonProps>`
  background-color: white;
  color: blue;
`;

export default SecondaryButton;
