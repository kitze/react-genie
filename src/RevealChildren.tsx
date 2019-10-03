import React from 'react';
import SequenceElement from './SequenceElement';
import { RevealProvider, RevealProviderProps } from './RevealProvider';

export const RevealChildren: React.FC<RevealProviderProps> = ({
  children,
  ...rest
}) => {
  return (
    <RevealProvider {...rest}>
      {React.Children.map(children, (child: any, index: number) => (
        <SequenceElement index={index} key={index}>
          {child}
        </SequenceElement>
      ))}
    </RevealProvider>
  );
};
