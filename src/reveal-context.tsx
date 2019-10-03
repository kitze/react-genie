import React from 'react';
import { RevealProviderProps } from './RevealProvider';

type IndexState = { lastIndex: number; setLastIndex: (i: number) => void };
type ReavealContextValue = RevealProviderProps & IndexState;

export const RevealContext = React.createContext<ReavealContextValue | any>(
  null
);
