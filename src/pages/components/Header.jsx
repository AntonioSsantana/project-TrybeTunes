import React from 'react';
import Loading from './Loading';
import { getUser } from '../../services/userAPI';

class Header extends React.Component {
  state = {
    USER_NAME: '',
    IS_LOADING: true,
  };

  componentDidMount() {
    this.getUserApi();
  }

  getUserApi = () => {
    this.setState({ IS_LOADING: true }, async () => {
      const { name } = await getUser();
      this.setState({
        USER_NAME: name,
        IS_LOADING: false,
      });
    });
  };

  render() {
    const { IS_LOADING, USER_NAME } = this.state;

    return (
      <header data-testid="header-component">
        {
          IS_LOADING
            ? <Loading />
            : <span data-testid="header-user-name">{USER_NAME}</span>
        }
      </header>
    );
  }
}

export default Header;
