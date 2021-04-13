import React from 'react';
import ICONS from './icons';

type iconType = 'bell' | 'bookmark';

export interface IconProps extends React.SVGProps<SVGAElement> {
  size: 'small' | 'medium' | 'large';
  icon: iconType;
}

const sizeMap = {
  small: 8,
  medium: 16,
  large: 24,
};

const Icon = ({ size, icon, className }: IconProps) => (
  <svg
    className={className}
    width={sizeMap[size]}
    height={sizeMap[size]}
    viewBox={ICONS[icon].viewbox}
  >
    <path d={ICONS[icon].path}></path>
  </svg>
);

export default Icon;
