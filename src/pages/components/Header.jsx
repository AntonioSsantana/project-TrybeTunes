import React from 'react';
import { Link } from 'react-router-dom';
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
            ? (<Loading />)
            : (
              <section>
                <span data-testid="header-user-name">{USER_NAME}</span>
                <nav>
                  <ul>
                    <li>
                      <Link
                        to="/search"
                        data-testid="link-to-search"
                      >
                        Pesquisar
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/favorites"
                        data-testid="link-to-favorites"
                      >
                        Favoritos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/profile"
                        data-testid="link-to-profile"
                      >
                        Profile
                      </Link>
                    </li>
                  </ul>
                </nav>
              </section>
            )
        }
      </header>
    );
  }
}

export default Header;
