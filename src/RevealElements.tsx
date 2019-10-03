import React, { ReactElement } from 'react';
import RevealProvider, { RevealProviderProps } from './RevealProvider';
import SequenceElement from './SequenceElement';

export const RevealElements: React.FC<
  {
    elements?: any;
    children: (elem: any, index: number) => ReactElement;
  } & RevealProviderProps
> = ({ elements, children, ...rest }) => {
  return (
    <RevealProvider {...rest}>
      {elements.map((elem: any, index: number) => {
        return (
          <SequenceElement index={index} key={index}>
            {children(elem, index)}
          </SequenceElement>
        );
      })}
    </RevealProvider>
  );
};

export default RevealElements;
