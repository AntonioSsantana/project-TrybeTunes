import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumCard extends React.Component {
  render() {
    const { ALBUMS } = this.props;
    if (ALBUMS.length === 0) {
      return (<span>Nenhum álbum foi encontrado</span>);
    }
    return (
      <div>
        <input
          data-testid="search-artist-input"
          type="text"
          placeholder="Nome do artista"
        />
        {ALBUMS.map((i) => (
          <div key={ i.collectionId }>
            <img src={ i.artworkUrl100 } alt={ i.collectionName } />
            <span>{i.collectionName}</span>
            <span>{i.artistName}</span>
            <Link
              to={ `/album/${i.collectionId}` }
              data-testid={ `link-to-album-${i.collectionId}` }
            />
          </div>
        ))}
      </div>
    );
  }
}

AlbumCard.propTypes = {
  ALBUMS: PropTypes.arrayOf(PropTypes.shape({
    collectionId: PropTypes.number,
    collectionName: PropTypes.string,
    artistName: PropTypes.string,
    artworkUrl100: PropTypes.string,
  })).isRequired,
};

export default AlbumCard;
