import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';


import Nav from './components/Nav/Nav'
import HomePage from './routes/HomePage/HomePage'
import LoginPage from './routes/LoginPage/LoginPage';
import RegisterPage from './routes/RegisterPage/RegisterPage';
import SubmitGuessPage from './routes/SubmitGuessPage/SubmitGuessPage';
import GuessListPage from './routes/GuessListPage/GuessListPage';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Nav />
        </header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route exact path='/guess' component={SubmitGuessPage} />
          <Route exact path='/guesslist' component={GuessListPage} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
