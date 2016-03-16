import React from 'react';
import ReactDOM from 'react-dom'

// Create a new component
// Should produce some HTML
const App = () => {
  return <div>Hello World</div>
}

// Take this component's generated HTML and put it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
