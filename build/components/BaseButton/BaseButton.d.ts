import React from 'react';
export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
declare const BaseButton: ({ className, children, ...otherProps }: BaseButtonProps) => JSX.Element;
export default BaseButton;
