import BaseButton, { BaseButtonProps } from '../BaseButton/BaseButton';
import styled from 'styled-components';

const PrimaryButton = styled(BaseButton)<BaseButtonProps>`
  color: white;
  background-color: blue;
`;

export default PrimaryButton;
