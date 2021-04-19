import React from 'react';
import { Button } from './BaseButton.styles';

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const BaseButton = ({
  className,
  children,
  ...otherProps
}: BaseButtonProps) => (
  <Button className={className} {...otherProps} type='button'>
    {children}
  </Button>
);

export default BaseButton;
