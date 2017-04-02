import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY='AIzaSyDC7GnqyF77YwjU1nUwG5PZ0xnbTkUs4vYnp'

// Create a new component. This component should produce some HTML.
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put in on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))