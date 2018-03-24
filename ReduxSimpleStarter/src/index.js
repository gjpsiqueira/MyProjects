import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyAKAf77VTwXiAIeLmxfzVkqYgxAMPu7Zo8'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null

    };

    YTSearch({key: API_KEY, term: 'Google Developers'}, (videos) => {
      console.log(videos);
      this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
