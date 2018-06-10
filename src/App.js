import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import Navigation from './components/Navigation/Navigation';
import Lights from './components/Lights/Lights';
import Stats from './components/Statistics/Statistics';

import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <Switch>
        <Route path='/lights' component={Lights} />
        <Route path='/stats' component={Stats} />
      </Switch>
    </div>
  );
}

export default App;
