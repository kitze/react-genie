import React from 'react';
import { Reveal } from './Reveal';

export const AnimatedTitle: React.FC<{
  children: string;
  spaceBetweenWords?: number;
  delay?: number;
  animation: string;
} & React.HTMLAttributes<any>> = ({
  animation,
  children,
  delay = 100,
  spaceBetweenWords = 8,
  ...rest
}) => {
  const titleStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  } as React.CSSProperties;

  const wordStyles = {
    marginRight: spaceBetweenWords,
  } as React.CSSProperties;

  return (
    <div style={titleStyles}>
      {children.split(' ').map((word, index) => (
        <Reveal
          animation={animation}
          key={index}
          delay={index * delay}
          style={wordStyles}
        >
          <div {...rest}>{word}</div>
        </Reveal>
      ))}
    </div>
  );
};
