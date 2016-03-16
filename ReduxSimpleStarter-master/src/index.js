import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyByN7djh_vobbprHVnb8XXZB-h_14DfjLs'
class App extends Component {
  constructor(props){
    super(props)
    YTSearch({key: API_KEY}, (videos) => {
      console.log(videos);
      this.setState({ videos })
      // this.setState({ videos: videos })
    })
    this.state = { videos: [] }
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('.container'))
