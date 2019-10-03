import React, { useContext } from 'react';
import { Reveal } from './reveal';
import { RevealContext } from './reveal-context';

export const SequenceElement: React.FC<{
  children: any;
  index: number;
}> = ({ index, children }) => {
  const {
    lastIndex,
    delayBetween,
    initialDelay,
    disableDelay,
    setLastIndex,
  } = useContext(RevealContext);

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
      onShowDone={() => setLastIndex(index + 1)}
      delay={disableDelay ? 0 : finalDelay}
      key={index}
    >
      {children}
    </Reveal>
  );
};

export default SequenceElement;
