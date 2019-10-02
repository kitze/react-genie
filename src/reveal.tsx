import { VisibilityProperty } from 'csstype';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Animation } from './reveal-animations';
import { CSSObject } from 'styled-components';

export enum RevealMode {
  Clone,
  Wrap,
}

export const Reveal: React.FC<{
  animation?: string; //animation class name
  delay?: number;
  children?: any;
  ratio?: number;
  mode?: RevealMode;
  debugName?: string;
  style?: CSSObject;
  onShowDone?: () => void;
}> = ({
  children,
  onShowDone,
  mode = RevealMode.Wrap,
  animation = Animation.FadeInUp,
  delay = 0,
  debugName,
  style,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (debugName) {
      console.log('Debugging', debugName);
    }
    if (inView) {
      if (debugName) {
        console.log(`${debugName} is in view`);
      }
      setTimeout(() => {
        setShow(true);
        onShowDone && onShowDone();
        if (debugName) {
          console.log(`showing ${debugName}`);
        }
      }, delay);
    }
  }, [inView]);

  let extraProps = {
    className: show
      ? animation
      : children.props
      ? children.props.className
      : '',
    style: {
      visibility: (show ? 'visible' : 'hidden') as VisibilityProperty,
      ...style,
    },
    ref,
  };

  const cloned = React.cloneElement(children, extraProps);

  return mode === RevealMode.Clone ? (
    cloned
  ) : (
    <div {...extraProps}>{children}</div>
  );
};
