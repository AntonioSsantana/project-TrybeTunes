import React from 'react';
import PropTypes from 'prop-types';
import Loading from './components/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  state = {
    NAME: '',
    DISABLED: true,
    LOADING: false,
  };

  onClickButton = async () => {
    const { NAME: name } = this.state;
    const { history } = this.props;
    this.setState({ LOADING: true });
    await createUser({ name });
    history.push('/search');
  };

  handleChangeInput = (event) => {
    const CHARACTER_MIN = 3;

    this.setState({ NAME: event.target.value });

    if (event.target.value.length >= CHARACTER_MIN) {
      this.setState({ DISABLED: false });
    } else {
      this.setState({ DISABLED: true });
    }
  };

  render() {
    const { DISABLED, LOADING } = this.state;

    return (
      <div data-testid="page-login">
        <label htmlFor="input-name">
          Login:
          <input
            type="text"
            id="input-name"
            data-testid="login-name-input"
            onChange={ this.handleChangeInput }
          />
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ DISABLED }
            onClick={ this.onClickButton }
          >
            Entrar
          </button>
          {
            LOADING ? <Loading /> : null
          }
        </label>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Login;
