import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './components/MusicCard';

class Album extends React.Component {
  state = {
    ALBUM_INFORMATION: {},
    SONGS: [],
  };

  componentDidMount() {
    this.handleAlbumInformation();
  }

  handleAlbumInformation = async () => {
    const { match: { params: { id } } } = this.props;
    const DATA_ALBUM = await getMusics(id);
    this.setState({
      ALBUM_INFORMATION: DATA_ALBUM[0],
      SONGS: DATA_ALBUM.slice(1),
    });
  };

  render() {
    const { ALBUM_INFORMATION, SONGS } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        <h4>Album</h4>
        <main>
          <img
            src={ ALBUM_INFORMATION.artworkUrl100 }
            alt={ ALBUM_INFORMATION.collectionName }
          />
          <h2 data-testid="album-name">{ALBUM_INFORMATION.collectionName}</h2>
          <h4 data-testid="artist-name">{ALBUM_INFORMATION.artistName}</h4>
          {SONGS.map((i) => (
            <div key={ i.trackId }>
              <MusicCard trackName={ i.trackName } previewUrl={ i.previewUrl } />
            </div>
          ))}

        </main>
      </div>
    );
  }
}

export default Album;

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};
