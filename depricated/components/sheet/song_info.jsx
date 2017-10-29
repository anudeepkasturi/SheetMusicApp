import React from 'react';

class SongInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Title",
      artist: "Artist"
    };
    this.updateSongInfo = this.updateSongInfo.bind(this);
  }

  setDefaultState(props = this.props) {
    this.setState({
      title: props.title || "Title",
      artist: props.artist || "Artist"
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setDefaultState(nextProps.songInfo);
  }

  updateSongInfo() {
    this.props.editSongInfo(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  render () {
    return (
      <div className="song-info">
        <input
          className="song-title"
          type="text"
          value={this.state.title}
          onChange={ this.update('title') }
          onBlur={this.updateSongInfo}
        />

        <input
          className="song-artist"
          type="text"
          value={this.state.artist}
          onChange={ this.update('artist') }
          onBlur={this.updateSongInfo}
        />
      </div>
    );
  }
}

export default SongInfo;
