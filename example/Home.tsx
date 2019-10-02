import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import { AnimatedTitle, Animation } from '../.';
import * as L from 'layout-styled-components';
import { Reveal } from '../src';

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
      <AnimatedTitle style={{ fontSize: 45 }}>The end  🎉</AnimatedTitle>
    </L.Vertical>
  );
};

export default Home;
