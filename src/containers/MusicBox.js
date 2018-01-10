import React from 'react';
import MusicList from '../components/MusicList';

class MusicBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {music: null};
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", () => {
      if (request.status === 200) {
        console.log("Request good");
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({music: data.feed.entry});
      }
      console.log(this.state);
    });
    request.send();
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <MusicList music={this.state.music}/>
      </div>
    )
  }
}

export default MusicBox;
