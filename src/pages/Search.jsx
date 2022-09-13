import React from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import CardAlbums from './components/CardAlbums';
import Header from './components/Header';

class Search extends React.Component {
  state = {
    ARTIST: '',
    ALBUMS: [],
    BUTTON_DISABLED: true,
    BUTTON_CLICKED: false,
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
    const DATA = await searchAlbumsAPI(ARTIST);
    if (DATA) {
      this.setState({
        ALBUMS: DATA,
        BUTTON_CLICKED: true,
      });
    }
  };

  render() {
    const { ARTIST, BUTTON_DISABLED, ALBUMS,
      BUTTON_CLICKED } = this.state;

    let returnedAlbums;
    let resultAlbums;

    if (BUTTON_CLICKED) {
      returnedAlbums = (
        <section>
          <div>
            <h6>
              Resultado de álbuns de:
              {' '}
              {ARTIST}
            </h6>
            <CardAlbums ALBUMS={ ALBUMS } />
          </div>
        </section>
      );
      resultAlbums = returnedAlbums;
      return resultAlbums;
    }

    return (
      <div data-testid="page-search">
        <Header />
        <div>
          <h4>Pesquisa</h4>
          <form>
            <label htmlFor="search-artist-input">
              <input
                id="search-artist-input"
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
        {
          resultAlbums
        }
      </div>
    );
  }
}

export default Search;
