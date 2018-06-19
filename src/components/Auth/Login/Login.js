import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import { auth } from '../../../firebase';
import AuthUserContext from '../AuthUserContext';

import CardDefault from '../../UI/CardDefault/CardDefault';

import styles from './Login.module.css';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: 'admin@mega.re', //We're just going for the pin-type login here ¯\_(ツ)_/¯
  password: '',
  error: null,
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push("/");
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
        Swal('', error.message, 'error')
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <CardDefault title="login">
        <div className={styles.loginContainer}>
          <AuthUserContext.Consumer>
            {authUser => authUser ?
              <React.Fragment>
                <h2>Already logged in</h2>
                <Button onClick={auth.doSignOut} variant="contained" color="secondary">Log out</Button>
              </React.Fragment> :
              <form onSubmit={this.onSubmit}>
                <Input
                  value={password}
                  onChange={event => this.setState(byPropKey('password', event.target.value))}
                  type="password"
                  placeholder="Password"
                />
                <Button disabled={isInvalid} type="submit" variant="contained" color="primary">
                  Sign In
                </Button>
              </form>
            }
          </AuthUserContext.Consumer>
        </div>
      </CardDefault>
    );
  }
}

export default withRouter(Login);