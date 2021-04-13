import React from 'react';
declare type iconType = 'bell' | 'bookmark';
interface IconProps extends React.SVGProps<SVGAElement> {
    size: 'small' | 'medium' | 'large';
    icon: iconType;
}
declare const Icon: ({ size, icon, className }: IconProps) => JSX.Element;
export default Icon;
