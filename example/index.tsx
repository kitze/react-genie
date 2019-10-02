import React from 'react';
import ReactDOM from 'react-dom';
import { RevealGlobalStyles } from '../.';
import Home from './Home';
import "react-placeholder/lib/reactPlaceholder.css";

const App = () => {
  return (
    <div>
      <RevealGlobalStyles />
      <Home />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
