import React from 'react';
import ICONS from './icons';

type iconType = 'bell' | 'bookmark';

interface IconProps extends React.SVGProps<SVGAElement> {
  width?: number;
  height?: number;
  icon: iconType;
}

const Icon = ({ width, height, icon, className }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox={ICONS[icon].viewbox}
  >
    <path d={ICONS[icon].path}></path>
  </svg>
);

export default Icon;
