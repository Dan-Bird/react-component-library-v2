import React from 'react';
declare type iconType = 'bell' | 'bookmark';
interface IconProps extends React.SVGProps<SVGAElement> {
    width?: number;
    height?: number;
    icon: iconType;
}
declare const Icon: ({ width, height, icon, className }: IconProps) => JSX.Element;
export default Icon;
