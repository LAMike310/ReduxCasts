import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyByN7djh_vobbprHVnb8XXZB-h_14DfjLs'
// Create a new component
// Should produce some HTML
const App = () => {
  return (
    <div><SearchBar /></div>
  )
}

// Take this component's generated HTML and put it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
