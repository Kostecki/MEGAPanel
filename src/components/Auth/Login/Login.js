import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import CardDefault from '../../UI/CardDefault/CardDefault';
import { auth } from '../../../firebase';
import AuthUserContext from '../AuthUserContext';
import Navigation from '../../Navigation/Navigation';

import styles from './Login.module.css';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  password: '',
  error: null
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      password
    } = this.state;

    const {
      history
    } = this.props;

    auth.doSignInWithEmailAndPassword(username, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(this.props.location.state.from);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
        Swal('Oops..', error.message, 'error')
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      password
    } = this.state;

    const isInvalid = password === '' || username === '';

    return (
      <React.Fragment>
        <CardDefault title="login">
          <div className={styles.loginContainer}>
            <AuthUserContext.Consumer>
              {authUser => authUser ?
                <React.Fragment>
                  <h2>Allerede logget ind..</h2>
                  <Button onClick={auth.doSignOut} variant="contained" color="secondary">Log ud</Button>
                </React.Fragment> :
                <form onSubmit={this.onSubmit}>
                <Input
                    value={username}
                    onChange={event => this.setState(byPropKey('username', event.target.value))}
                    type="text"
                    placeholder="Brugernavn"
                  />
                  <Input
                    value={password}
                    onChange={event => this.setState(byPropKey('password', event.target.value))}
                    type="password"
                    placeholder="Password"
                  />
                  <Button disabled={isInvalid} type="submit" variant="contained" color="primary">
                    Log ind
                  </Button>
                </form>
              }
            </AuthUserContext.Consumer>
          </div>
        </CardDefault>
        <Navigation />
      </React.Fragment>
    );
  }
}

export default withRouter(Login);