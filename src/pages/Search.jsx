import React from 'react';
import Header from './components/Header';

class Search extends React.Component {
  render() {
    return (
      <div data-testid="page-search">
        <h4>Pesquisa</h4>
        <Header />
      </div>
    );
  }
}

export default Search;
