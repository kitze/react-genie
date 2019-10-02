import React from 'react';
import { Reveal } from './reveal';

//styles
import * as L from 'layout-styled-components';

export const AnimatedTitle: React.FC<{
  children: string;
  spaceBetweenWords?: number;
  delay?: number;
}> = ({ children, delay = 100, spaceBetweenWords = 8, ...rest }) => {
  return (
    <L.Horizontal wrap center spaceAll={spaceBetweenWords}>
      {children.split(' ').map((word, index) => (
        <Reveal key={index} delay={index * delay}>
          <div {...rest}>{word}</div>
        </Reveal>
      ))}
    </L.Horizontal>
  );
};
