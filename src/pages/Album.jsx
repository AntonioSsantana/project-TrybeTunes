import React from 'react';
import Header from './components/Header';

class Album extends React.Component {
  render() {
    const { artistName, buttonClicked } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        <h4>Album</h4>
      </div>
    );
  }
}

export default Album;
