import React from 'react';
import { Heading } from './BaseTitle.styles';

export interface BaseTitleProps {
  className?: string;
  children: React.ReactNode;
}

const BaseTitle = ({ className, children }: BaseTitleProps) => (
  <Heading className={className}>{children}</Heading>
);

export default BaseTitle;
