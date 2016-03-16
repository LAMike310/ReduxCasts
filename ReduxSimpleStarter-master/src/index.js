import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyByN7djh_vobbprHVnb8XXZB-h_14DfjLs'
YTSearch({key: API_KEY}, function(results){
  console.log(results);
})
const App = () => {
  return (
    <div><SearchBar /></div>
  )
}
ReactDOM.render(<App />, document.querySelector('.container'))
