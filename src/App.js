import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import Landing from './components/Landing/Landing';
import Lights from './components/Lights/Lights';
import Stats from './components/Statistics/Statistics';
import QRScan from './components/QRScan/QRScan';

import './App.css';

ReactGA.initialize('UA-39781810-11');

class App extends Component {
  componentDidMount  = () => ReactGA.pageview(window.location.pathname + window.location.search);
  componentDidUpdate = () => ReactGA.pageview(window.location.pathname + window.location.search);

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/lights' component={Lights} />
          <Route path='/stats' component={Stats} />
          <Route path='/qr' component={QRScan} />
        </Switch>
      </div>
    )
  }
}

export default App;
