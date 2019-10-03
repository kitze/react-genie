import React, { useContext } from 'react';
import { RevealProviderProps } from 'RevealProvider';
import { Reveal } from './Reveal';
import { RevealContext } from './reveal-context';

export const SequenceElement: React.FC<
  {
    children: any;
    index: number;
  } & RevealProviderProps
> = ({ index, children, ...rest }) => {
  const revealContext = useContext(RevealContext);

  const config = {
    ...revealContext,
    ...rest,
  };

  const {
    delayBetween,
    initialDelay,
    disableDelay,
    mode,
    animation,
    lastIndex,
    setLastIndex,
  } = config;

  const wait = index > lastIndex;
  const isFirstElement = index === 0;
  const firstElementDelay = initialDelay !== undefined ? initialDelay : 0;
  const finalDelay = disableDelay
    ? 0
    : isFirstElement
    ? firstElementDelay
    : delayBetween;

  return (
    <Reveal
      wait={wait}
      mode={mode}
      animation={animation}
      onShowDone={() => setLastIndex(index + 1)}
      delay={disableDelay ? 0 : finalDelay}
      key={index}
    >
      {children}
    </Reveal>
  );
};

export default SequenceElement;
