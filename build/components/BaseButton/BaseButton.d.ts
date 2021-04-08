import React from 'react';
export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: string | React.ReactNode;
}
declare const BaseButton: ({ className, children, ...otherProps }: BaseButtonProps) => JSX.Element;
export default BaseButton;
