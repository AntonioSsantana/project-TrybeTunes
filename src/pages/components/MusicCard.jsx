import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  state = {
    CHECKED: false,
    IS_LOADING: false,
  };

  async componentDidMount() {
    this.handleFavorites();
  }

  handleFavorites = async () => {
    this.setState({
      IS_LOADING: true,
    });
    const FAVORITES_LIST = await getFavoriteSongs();
    this.setState({
      IS_LOADING: false,
    });
    const { trackId } = this.props;
    const LIST = FAVORITES_LIST.some((i) => i.trackId === trackId);
    this.setState({
      CHECKED: LIST,
    });
  };

  handleCheckbox = async (song) => {
    this.setState({
      IS_LOADING: true,
    });
    await addSong(song);
    this.setState({
      IS_LOADING: false,
      CHECKED: true,
    });
  };

  render() {
    const { trackName, previewUrl,
      trackId, music } = this.props;

    const { IS_LOADING, CHECKED } = this.state;

    return (
      IS_LOADING ? <Loading /> : (
        <div>
          <span>{trackName}</span>
          <audio data-testid="audio-component" src={previewUrl} controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
            .
          </audio>
          <label htmlFor={trackId}>
            Favoritar
            <input
              type="checkbox"
              data-testid={`checkbox-music-${trackId}`}
              id={trackId}
              checked={CHECKED}
              onChange={() => this.handleCheckbox(music)}
            />
          </label>
        </div>
      )
    );
  }
}

export default MusicCard;

MusicCard.propTypes = {
  trackId: PropTypes.number.isRequired,
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  music: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
  }).isRequired,
};
