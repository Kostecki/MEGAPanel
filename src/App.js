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
  state = {
    showToast: false
  }

  componentDidMount = () => {
    ReactGA.pageview(window.location.pathname + window.location.search)

    this.fetchFromApi();
  };
  componentDidUpdate = () => ReactGA.pageview(window.location.pathname + window.location.search);

  fetchFromApi = () => {
    Axios.get('/ping')
      .then((response) => {
        if (response.data.response !== "pong") {
          this.setState({ showToast: true })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className={`App ${this.state.showToast && ("toastVisible")}`}>
        {this.state.showToast && (<Toast type="danger" text="Controlleren svarer ikke. Den er nok offline ¯\_(ツ)_/¯" />)}
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