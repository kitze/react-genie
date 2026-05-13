import React, { CSSProperties, useContext } from 'react';
import { RevealProviderProps } from 'RevealProvider';
import { Reveal } from './Reveal';
import { RevealContext } from './reveal-context';

export const SequenceElement: React.FC<{
  children: any;
  index: number;
  style: CSSProperties;
} & RevealProviderProps> = ({ index, children, style, ...rest }) => {
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
    firstIndex,
    setFirstIndex,
  } = config;

  const shouldWait = firstIndex === 0;
  const wait = shouldWait ? index > lastIndex : false;
  const isFirstElement = index === 0;
  const firstElementDelay = initialDelay !== undefined ? initialDelay : 0;
  const shouldDisableDelay = disableDelay || firstIndex !== 0;
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
      onEnterView={() => {
        if (firstIndex === null) {
          setFirstIndex(index);
        }
      }}
      delay={shouldDisableDelay ? 0 : finalDelay}
      style={style}
      key={index}
    >
      {children}
    </Reveal>
  );
};

export default SequenceElement;
