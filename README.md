# react-genie

### 🙋‍♂️ Made by [@thekitze](https://twitter.com/thekitze)

### Other projects:

- 💻 [Sizzy](https://sizzy.co) - A browser for developers and designers
- 🏫 [React Academy](https://reactacademy.io) - Interactive React and GraphQL workshops
- 💌 [Twizzy](https://twizzy.app) - A standalone app for Twitter DM
- 🤖 [JSUI](https://github.com/kitze/JSUI) - A powerful UI toolkit for managing JavaScript apps


## Dependencies
- styled-components
- layout-styled-components
- react-animations
- react-intersection-observer

## Usage

`yarn add react-genie`

Just render the `RevealGlobalStyles` component anywhere, so it will add the class names for the animations:

```
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
```
<Reveal>
  <h1>The default animation is fade in</h1>
</Reveal>
```

### Specifying animation using the `animation` prop:
```
import {Animation} from 'react-genie';

<Reveal animation={Animation.SlideInLeft}>
  <h1>The default animation is fade in</h1>
</Reveal>
```
Hint: you can also pass your own class name here if you have custom animations.

### Wrap vs Clone

The default `mode` is `wrap`, so the children element will be wrapped in an additional div.
If you don't want that additional div, you can use `clone` or `RevealMode.Clone`.

```
import {Animation, RevealMode} from 'react-genie';

<Reveal revealMode={RevealMode.Clone}>
  <h1>The default animation is fade in</h1>
</Reveal>
```

In order for `clone` to work your element needs to accept `className`, `style`, and `ref`, as props. So, if you're trying to clone custom components, make sure they support these props.


## CodeSandbox
https://codesandbox.io/s/react-genie-example-8xfsc

## Demo
https://8xfsc.csb.app/
