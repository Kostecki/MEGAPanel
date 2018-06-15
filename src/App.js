import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PrivateRoute from './utils/auth';
import ReactGA from 'react-ga';

import Landing from './components/Landing/Landing';
import Lights from './components/Lights/Lights';
import Stats from './components/Statistics/Statistics';
import QRScan from './components/QRScan/QRScan';
import Admin from './components/Admin/Admin';
import Login from './components/Auth/Login/Login';
import Axios from './utils/api';

import './App.css';

ReactGA.initialize('UA-39781810-11');

class App extends Component {
  state = {
    isAuthenticated: false,
    pinToCheckAgainst: null
  }

  componentWillMount = () => {
    this.setState(() => ({
      isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated'))
    }))
    Axios.get('/')
      .then((response) => {
        this.setState(() => ({ pinToCheckAgainst: 1234 }))
      })
  }

  componentDidMount = () => ReactGA.pageview(window.location.pathname + window.location.search);
  componentDidUpdate = () => ReactGA.pageview(window.location.pathname + window.location.search);

  doAuth = (pin, from) => {
    let userPin = parseInt(pin, 10);
    if (userPin === this.state.pinToCheckAgainst) {
      this.setState(() => ({
        isAuthenticated: true
      }), () => {
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
        this.props.history.push(from);
      });
    };
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <PrivateRoute path='/lights' isAuthenticated={this.state.isAuthenticated} component={Lights} />
          <Route path='/stats' component={Stats} />
          <Route path='/qr' component={QRScan} />
          <PrivateRoute path='/admin' isAuthenticated={this.state.isAuthenticated} component={Admin} />

          <Route path='/login' render={(props) => <Login {...props} doAuth={this.doAuth} />} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);