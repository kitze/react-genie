import { translate3d } from './utils';

export const fadeInUp = {
  from: {
    opacity: 0,
    transform: translate3d(0, '50px', 0),
  },
  to: {
    opacity: 1,
    transform: 'none',
  },
};
