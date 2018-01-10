import React from 'react';
import Single from './Single';

class MusicList extends React.Component {
  render() {
    if (!this.props.music) {
      return null;
    }
    const musicNodes = this.props.music.map((song, index) => {

      return (
        <React.Fragment>
          <Single position={index+1} title={song.title.label} ></Single>
          <br/>
        </React.Fragment>
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
