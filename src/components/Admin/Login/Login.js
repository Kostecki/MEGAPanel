import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';

import { auth } from '../../../firebase';
import withAuthorization from '../../Auth/withAuthorization';

import styles from './Login.module.css';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        Swal('Awesome!', 'Password blev skiftet', 'success')
      })
      .catch(error => {
        console.log(error);
        this.setState(byPropKey('error', error));
        Swal('Oops..', error.message, 'error');
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <Input
            className={styles.input}
            value={passwordOne}
            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
            type="password"
            placeholder="Nyt Password"
          />
          <Input
            className={styles.input}
            value={passwordTwo}
            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
            type="password"
            placeholder="Bekræft Password"
          />
          <Button disabled={isInvalid} type="submit" variant="contained" color="primary">
            Skift Password
                </Button>
        </form>

        <Button onClick={auth.doSignOut} variant="contained" color="secondary">Log ud</Button>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser && authUser.email === "admin@mega.re";

export default withAuthorization(authCondition, "/admin")(Admin);