import React from 'react';
import Single from './Single';

class MusicList extends React.Component {
  render() {
    if (!this.props.music) {
      return null;
    }
    const musicNodes = this.props.music.map((song, index) => {

      return (
        <div className="single" key={index}>
          <Single position={index+1} title={song.title.label} img={song["im:image"][2].label}></Single>
          <br/>
        </div>
      )
    })
    return (
      <div className="music-list">
        {musicNodes}
      </div>
    )
  }
}

export default MusicList;
