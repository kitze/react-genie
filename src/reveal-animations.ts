import { createGlobalStyle, keyframes } from 'styled-components';
import * as animations from './animations';

// @ts-ignore
import fadeIn from 'react-animations/lib/fade-in';
// @ts-ignore
import fadeInLeft from 'react-animations/lib/fade-in-left';
// @ts-ignore
import fadeInRight from 'react-animations/lib/fade-in-right';
// @ts-ignore
import slideInLeft from 'react-animations/lib/slide-in-left';
// @ts-ignore
import slideInRight from 'react-animations/lib/slide-in-right';
// @ts-ignore
import bounceInLeft from 'react-animations/lib/bounce-in-left';
// @ts-ignore
import bounceInRight from 'react-animations/lib/bounce-in-right';

export enum Animation {
  FadeInUp = 'fade-in-up',
  FadeIn = 'fade-in',
  SlideInLeft = 'slide-in-left',
  SlideInRight = 'slide-in-right',
  FadeInLeft = 'fade-in-left',
  FadeInRight = 'fade-in-right',
  BounceInLeft = 'bounce-in-left',
  BounceInRight = 'bounce-in-right',
}

export const RevealGlobalStyles = createGlobalStyle`

  .${Animation.FadeInUp} {
    animation: ${keyframes`${animations.fadeInUp}`} 500ms;
  } 
  
  .${Animation.FadeIn} {
    animation: ${keyframes`${fadeIn}`} 500ms;
  }
  
  .${Animation.SlideInLeft} {
    animation: ${keyframes`${slideInLeft}`} 500ms;
  }
  
  .${Animation.SlideInRight} {
    animation: ${keyframes`${slideInRight}`} 500ms;
  }

  .${Animation.FadeInLeft} {
    animation: ${keyframes`${fadeInLeft}`} 500ms;
  }

  .${Animation.FadeInRight} {
    animation: ${keyframes`${fadeInRight}`} 500ms;
  }

  .${Animation.BounceInLeft} {
    animation: ${keyframes`${bounceInLeft}`} 1250ms;
  }

  .${Animation.BounceInRight} {
    animation: ${keyframes`${bounceInRight}`} 1250ms;
  }
`;
