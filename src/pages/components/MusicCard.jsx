import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  state = {
    CHECKED: false,
    IS_LOADING: false,
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
      /*  <div>
         <p>{trackName}</p>
         <audio data-testid="audio-component" src={previewUrl} controls>
           <track kind="captions" />
           O seu navegador não suporta o elemento
           <code>audio</code>
           .
         </audio>
       </div> */
      IS_LOADING ? <Loading /> : (
        <div>
          <span>{trackName}</span>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
            .
          </audio>
          <label htmlFor={ trackId }>
            Favoritar
            <input
              type="checkbox"
              data-testid={ `checkbox-music-${trackId}` }
              id={ trackId }
              checked={ CHECKED }
              onChange={ () => this.handleCheckbox(music) }
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
