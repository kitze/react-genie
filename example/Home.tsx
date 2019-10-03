import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import {
  AnimatedTitle,
  Reveal,
  RevealChildren,
  RevealElements,
  Animation,
} from '../.';

import * as L from 'layout-styled-components';

export const Home = () => {
  let placeholder = (
    <ReactPlaceholder
      style={{ width: 500 }}
      showLoadingAnimation={true}
      type="text"
      rows={25}
      ready={false}
    >
      <div />
    </ReactPlaceholder>
  );

  return (
    <L.Vertical center spaceAll={100}>
      <AnimatedTitle style={{ fontSize: 45 }}>
        👋️ Hello world, I'm react-genie!
      </AnimatedTitle>
      {placeholder}
      <AnimatedTitle style={{ fontSize: 45 }}>
        😄 Scrolling animations are fun
      </AnimatedTitle>
      {placeholder}
      <Reveal animation={Animation.FadeInUp}>
        <h1>🤯 Revealing this</h1>
        {placeholder}
      </Reveal>
      <Reveal animation={Animation.SlideInLeft}>
        <h1>🕵️‍♀️ From The Left</h1>
        {placeholder}
      </Reveal>
      <Reveal animation={Animation.SlideInRight}>
        <h1>🕵️‍♂️ From The Right</h1>
        {placeholder}
      </Reveal>
      <Reveal animation={Animation.FadeIn}>
        <h1>☁️ Fade In</h1>
        {placeholder}
      </Reveal>

      <L.Grid gap={20} cols={3}>
        <RevealElements
          delayBetween={700}
          elements={'Hello there world how are you?'.split(' ')}
        >
          {(text, index) => (
            <div>
              <h1 style={{ textAlign: 'center' }}>{text}</h1>
              <img
                style={{ height: 300, width: 300 }}
                src={`https://picsum.photos/300/${300 + index}`}
                alt=""
              />
            </div>
          )}
        </RevealElements>
      </L.Grid>

      <RevealChildren initialDelay={1000} delayBetween={200}>
        <div>
          <h3>Image 1</h3>
          <img
            style={{ height: 300, width: 300 }}
            src={`https://picsum.photos/301/300`}
            alt=""
          />
        </div>
        <div>
          <h3>Image 2</h3>
          <img
            style={{ height: 300, width: 300 }}
            src={`https://picsum.photos/302/300`}
            alt=""
          />
          e
        </div>
        <div>
          <h3>Image 3</h3>
          <img
            style={{ height: 300, width: 300 }}
            src={`https://picsum.photos/303/300`}
            alt=""
          />
        </div>
      </RevealChildren>

      <AnimatedTitle style={{ fontSize: 45 }}>The end 🎉</AnimatedTitle>
    </L.Vertical>
  );
};

export default Home;
