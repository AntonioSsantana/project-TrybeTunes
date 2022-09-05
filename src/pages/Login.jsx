import React from 'react';
import PropTypes from 'prop-types';
import Loading from './components/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  state = {
    name: '',
    disabled: true,
    loading: false,
  };

  onClickButton = async () => {
    const { name } = this.state;
    const { history } = this.props;
    this.setState({ loading: true });
    await createUser({ name });
    history.push('/search');
  };

  handleChangeInput = (event) => {
    const CHARACTER_MIN = 3;

    this.setState({ name: event.target.value });

    if (event.target.value.length >= CHARACTER_MIN) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  };

  render() {
    const { disabled, loading } = this.state;

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
            disabled={ disabled }
            onClick={ this.onClickButton }
          >
            Entrar
          </button>
          {
            loading ? <Loading /> : null
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
