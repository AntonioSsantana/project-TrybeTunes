import React, { cloneElement } from 'react';

class CardAlbums extends React.Component {
  state = {
    artistName: this.props.artistName,
    artWorkUrl100: this.props.artworkUrl100,
    collectionName: this.props.collectionName,
    releaseDate: this.props.releaseDate,
    trackCount: this.props.trackCount,
  };

  render() {
    const { artistName, artWorkUrl100, collectionName, releaseDate,
      trackCount } = this.state;
    return (
      <div>
        <h3>
          Artista:
          {artistName}
        </h3>
        <span>
          Albúm:
          {collectionName}
        </span>
        <br />
        <span>
          Músicas:
          {trackCount}
        </span>
        <br />
        <span>
          <em>
            Data de lançamento:
            {releaseDate}
          </em>
        </span>
        <br />
        <img src={ artWorkUrl100 } alt={ collectionName } width="150px" />
      </div>
    );
  }
}

export default CardAlbums;
