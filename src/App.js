import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';

import HomePage from './routes/HomePage/HomePage'
import LoginPage from './routes/LoginPage/LoginPage';
import RegisterPage from './routes/RegisterPage/RegisterPage';
import SubmitGuessPage from './routes/SubmitGuessPage/SubmitGuessPage';
import GuessListPage from './routes/GuessListPage/GuessListPage';

import PrivateRoute from "../src/Utils/PrivateRoute"
import PublicOnlyRoute from "../src/Utils/PublicOnlyRoute";


class App extends Component {

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <PublicOnlyRoute path='/login' component={LoginPage} />
          <PublicOnlyRoute path='/register' component={RegisterPage} />
          <PrivateRoute exact path='/guess' component={SubmitGuessPage} />
          <PrivateRoute exact path='/guesslist' component={GuessListPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
