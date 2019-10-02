import { createGlobalStyle, keyframes } from 'styled-components';
import * as animations from './animations';

// @ts-ignore
import fadeIn from 'react-animations/lib/fade-in';
// @ts-ignore
import slideInLeft from 'react-animations/lib/slide-in-left';
// @ts-ignore
import slideInRight from 'react-animations/lib/slide-in-right';

export enum Animation {
  FadeInUp = 'fade-in-up',
  FadeIn = 'fade-in',
  SlideInLeft = 'slide-in-left',
  SlideInRight = 'slide-in-right',
}

export const RevealGlobalStyles = createGlobalStyle`

  .${Animation.FadeInUp} {
    animation: ${keyframes`${animations.fadeInUp}`} 500ms;
  } 
  
  .${Animation.FadeIn} {
    animation: ${keyframes`${fadeIn}`} 500ms;
  }
  
  .slide-in-left {
    animation: ${keyframes`${slideInLeft}`} 500ms;
  }
  
  .slide-in-right {
    animation: ${keyframes`${slideInRight}`} 500ms;
  }
`;
