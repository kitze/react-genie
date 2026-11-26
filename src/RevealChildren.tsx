import React, { CSSProperties } from 'react';
import SequenceElement from './SequenceElement';
import { RevealProvider, RevealProviderProps } from './RevealProvider';

export const RevealChildren: React.FC<RevealProviderProps & {
  style: CSSProperties;
}> = ({ children, style, ...rest }) => {
  return (
    <RevealProvider {...rest}>
      {React.Children.map(children, (child: any, index: number) => (
        <SequenceElement index={index} key={index} style={style}>
          {child}
        </SequenceElement>
      ))}
    </RevealProvider>
  );
};
