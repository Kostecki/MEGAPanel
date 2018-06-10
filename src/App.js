import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Lights from './components/Lights/Lights';
import Stats from './components/Statistics/Statistics';

import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/lights' component={Lights} />
        <Route path='/stats' component={Stats} />
      </Switch>
    </div>
  );
}

export default App;
