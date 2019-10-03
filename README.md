# 🧞‍♂️ react-genie

### 🙋‍♂️ Made by [@thekitze](https://twitter.com/thekitze)

### Other projects:

- 💻 [Sizzy](https://sizzy.co) - A browser for developers and designers
- 🏫 [React Academy](https://reactacademy.io) - Interactive React and GraphQL workshops
- 💌 [Twizzy](https://twizzy.app) - A standalone app for Twitter DM
- 🤖 [JSUI](https://github.com/kitze/JSUI) - A powerful UI toolkit for managing JavaScript apps

## Used on [sizzy.co](https://sizzy.co)
![animation](https://i.imgur.com/0kK9C2P.gif)

## CodeSandbox
https://codesandbox.io/s/react-genie-example-8xfsc

## Demo
https://8xfsc.csb.app/


## Dependencies
- styled-components
- layout-styled-components
- react-animations
- react-intersection-observer

## Usage

`yarn add react-genie`

Just render the `RevealGlobalStyles` component anywhere, so it will add the class names for the animations:

```jsx
import {RevealGlobalStyles} from 'react-genie'

const App = () => {
  return (
    <div>
      <RevealGlobalStyles />
      <div> rest of the app </div>
    </div>
  );
};
```


### Default animation:
```jsx
import {Reveal} from 'react-genie';

<Reveal>
  <h1>The default animation is fade in</h1>
</Reveal>
```

## Props:
```js
{
  animation?: string; // animation class name
  delay?: number; // animation delay
  mode?: RevealMode; // "clone" or "wrap"
  debugName?: string; // if you specify it, you will get console logs
  style?: CSSObject; // extra styles
  onShowDone?: () => void; // callback after show
}
```


### Specifying animation using the `animation` prop:
```jsx
import {Reveal, Animation} from 'react-genie';

<Reveal animation={Animation.SlideInLeft}>
  <h1>This title will slide in from the left</h1>
</Reveal>
```
Hint: you can also pass your own class name here if you have custom animations.

### Wrap vs Clone

The default `mode` is `wrap`, so the children element will be wrapped in an additional div.
If you don't want that additional div, you can use `clone` or `RevealMode.Clone`.

```jsx
import {Reval, RevealMode} from 'react-genie';

<Reveal mode={RevealMode.Clone}>
  <h1>This h1 will be cloned instead of wrapped</h1>
</Reveal>
```

In order for `clone` to work your element needs to accept `className`, `style`, and `ref`, as props. So, if you're trying to clone custom components, make sure they support these props.

### The `AnimatedTitle` component
```jsx
import {Reveal, AnimatedTitle} from 'react-genie';

<AnimatedTitle>
  This sentence will animate in word by word
</AnimatedTitle>
```

The `AnimatedTitle` component will split the `children` prop word by word (so it should be a string), and animate each word with a delay in between.
