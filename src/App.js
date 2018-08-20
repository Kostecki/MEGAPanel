import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import withAuthentication from './components/Auth/withAuthentication';

import Axios from './utils/api';
import Lights from './components/Lights/Lights';
import Stats from './components/Statistics/Statistics';
import QRScan from './components/QRScan/QRScan';
import Admin from './components/Admin/Admin';
import Login from './components/Auth/Login/Login';
import Toast from './components/UI/Toast/Toast';

import './App.css';

ReactGA.initialize('UA-39781810-11');

class App extends Component {
  componentDidMount = () => {
    ReactGA.pageview(window.location.pathname + window.location.search)

    this.fetchFromApi();
  };
  componentDidUpdate = () => ReactGA.pageview(window.location.pathname + window.location.search);

  fetchFromApi = () => {
    Axios.get('/ping')
      .then((response) => {
        if (response.data.response !== "pong") {
          this.visible = true; //Show danger toast if controller doesn't response to our ping/pong
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        {this.visible && ( <Toast type="success" text="Oops.. Controlleren svarer ikke. Den er nok offline!" /> )}
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