import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyAKAf77VTwXiAIeLmxfzVkqYgxAMPu7Zo8'

YTSearch({key: API_KEY, term: 'porta dos fundos'}, function(data) {
  console.log(data)
})

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {videos: []};
  }
  render() {
    return (
      <div><SearchBar /></div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
