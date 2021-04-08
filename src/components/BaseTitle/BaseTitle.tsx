import React from 'react';
import { Heading } from './BaseTitle.styles';

export interface BaseTitleProps {
  className?: string;
}

const BaseTitle = ({ className }: BaseTitleProps) => (
  <Heading className={className}></Heading>
);

export default BaseTitle;
