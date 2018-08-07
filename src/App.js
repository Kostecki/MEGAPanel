import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import withAuthentication from './components/Auth/withAuthentication';

import Lights from './components/Lights/Lights';
import Stats from './components/Statistics/Statistics';
import QRScan from './components/QRScan/QRScan';
import Admin from './components/Admin/Admin';
import Login from './components/Auth/Login/Login';

import './App.css';

ReactGA.initialize('UA-39781810-11');

class App extends Component {
  componentDidMount = () => ReactGA.pageview(window.location.pathname + window.location.search);
  componentDidUpdate = () => ReactGA.pageview(window.location.pathname + window.location.search);

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Stats} />
          <Route path='/lights' component={Lights} />
          <Route path='/qr' component={QRScan} />
          <Route path='/admin' component={Admin} />

          <Route path='/login' component={Login} />
        </Switch>
      </div>
    )
  }
}

export default withAuthentication(App);