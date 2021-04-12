import React from 'react';
export interface BaseTitleProps {
    className?: string;
    children: React.ReactNode;
}
declare const BaseTitle: ({ className, children }: BaseTitleProps) => JSX.Element;
export default BaseTitle;
