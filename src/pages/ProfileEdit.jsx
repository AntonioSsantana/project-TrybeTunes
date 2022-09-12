import React from 'react';
import Header from './components/Header';

class ProfileEdit extends React.Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <h4> Profile Edit</h4>
      </div>
    );
  }
}

export default ProfileEdit;
