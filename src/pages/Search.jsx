import React from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import CardAlbums from './components/CardAlbums';
import Header from './components/Header';
import Loading from './components/Loading';

class Search extends React.Component {
  state = {
    ARTIST: '',
    ALBUMS: [],
    BUTTON_DISABLED: true,
    BUTTON_CLICKED: false,
    IS_LOADING: true,
  };

  handleChangeArtist = (event) => {
    const CHARACTER_MIN = 2;
    const { target } = event;
    const { value } = target;

    if (value.length >= CHARACTER_MIN) {
      this.setState({ BUTTON_DISABLED: false });
    } else {
      this.setState({ BUTTON_DISABLED: true });
    }
    this.setState({ ARTIST: value });
  };

  handleClickApiAlbums = async () => {
    const { ARTIST } = this.state;
    const RESPONSE = await searchAlbumsAPI(ARTIST);
    if (RESPONSE) {
      this.setState({
        ALBUMS: RESPONSE,
        BUTTON_CLICKED: true,
        IS_LOADING: false,
      });
    }
  };

  render() {
    const { ARTIST, BUTTON_DISABLED, ALBUMS,
      BUTTON_CLICKED, IS_LOADING } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <div>
          <h4>Pesquisa</h4>
          <form>
            <label htmlFor="artist-input">
              <input
                id="artist-input"
                data-testid="search-artist-input"
                type="text"
                placeholder="Nome do artista"
                onChange={ this.handleChangeArtist }
              />
              <button
                data-testid="search-artist-button"
                type="button"
                disabled={ BUTTON_DISABLED }
                onClick={ this.handleClickApiAlbums }
              >
                Pesquisar
              </button>
            </label>
          </form>
        </div>
        {!BUTTON_CLICKED ? null : IS_LOADING ? <Loading />
          : <div>
            <h2>
              Resultado de álbuns de:
              {ARTIST}
            </h2>
            {ALBUMS.map((i) => (<CardAlbums
              key={ i.collectionId }
              artistName={ i.artistName }
              artworkUrl100={ i.artworkUrl100 }
              collectionName={ i.collectionName }
              releaseDate={ i.releaseDate }
              trackCount={ i.trackCount }
            />
            ))}
            </div>}
      </div>
    );
  }
}

export default Search;
