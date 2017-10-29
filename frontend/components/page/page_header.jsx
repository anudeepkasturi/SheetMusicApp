import React from 'react';
import { connect } from 'react-redux';
import { editSongInfo } from '../../actions/song_info_actions';
import styles from '../styles';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      title: this.props.songInfo.title,
      artist: this.props.songInfo.artist
    };
    this.updateSongInfo = this.updateSongInfo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.songInfo.title,
      artist: nextProps.songInfo.artist
    });
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
          className="song-info-input"
          type="text"
          value={this.state.title}
          onChange={ this.update('title') }
          onBlur={this.updateSongInfo}
          style={styles.pageHeader}
          placeholder="Title"
        />
        <input
          className="song-info-input"
          type="text"
          value={this.state.artist}
          onChange={ this.update('artist') }
          onBlur={this.updateSongInfo}
          style={styles.pageHeader}
          placeholder="Artist"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  songInfo: state.songInfo
});

const mapDispatchToProps = ( dispatch ) => ({
  editSongInfo: songInfo => dispatch(editSongInfo(songInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageHeader);
