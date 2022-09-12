import React from 'react';
import Header from './components/Header';

class Search extends React.Component {
  state = {
    BUTTON_DISABLED: true,
  };

  handleChangeArtist = (event) => {
    const CHARACTER_MIN = 2;

    if (event.target.value.length >= CHARACTER_MIN) {
      this.setState({ BUTTON_DISABLED: false });
    } else {
      this.setState({ BUTTON_DISABLED: true });
    }
  };

  render() {
    const { BUTTON_DISABLED } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
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
              type="submit"
              disabled={ BUTTON_DISABLED }
            >
              Pesquisar
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
