import { VisibilityProperty } from 'csstype';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export enum RevealMode {
  Clone,
  Wrap,
}

export const Reveal: React.FC<{
  animation: string; //animation class name
  delay?: number;
  children?: any;
  mode?: RevealMode;
  debugName?: string;
  style?: React.CSSProperties;
  onShowDone?: () => void;
  onEnterView?: () => void;
  wait?: boolean;
}> = ({
  children,
  onShowDone,
  mode = RevealMode.Wrap,
  animation,
  delay = 0,
  debugName,
  style,
  wait,
  onEnterView,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (debugName) {
      console.log('Debugging', debugName);
    }
    if (inView) {
      onEnterView && onEnterView();
      if (wait !== true) {
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
    }
  }, [inView, wait]);

  let className = show
    ? animation
    : children.props
    ? children.props.className
    : '';

  let visibility = (show ? 'visible' : 'hidden') as VisibilityProperty;

  let extraProps = {
    className,
    style: {
      visibility,
      ...style,
    },
    ref,
  };

  if (mode === RevealMode.Clone) {
    return React.cloneElement(children, extraProps);
  }

  return <div {...extraProps}>{children}</div>;
};
