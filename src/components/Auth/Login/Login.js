import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import CardDefault from '../../UI/CardDefault/CardDefault';
import Navigation from '../../Navigation/Navigation';

import styles from './Login.module.css';

class Login extends Component {
  state = {
    pin: ''
  }

  handleInputChange = (event) => {
    this.setState({
      pin: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <CardDefault title="login">
          <div className={styles.loginContainer}>
            <Input
              placeholder="Pinkode"
              type="password"
              inputProps={{
                'aria-label': 'Pinkode',
              }}
              onChange={this.handleInputChange} />
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.props.doAuth(this.state.pin, this.props.location.state.from.pathname)}>Login</Button>
          </div>
        </CardDefault>
        <Navigation />
      </React.Fragment>
    )
  }
}

export default Login;