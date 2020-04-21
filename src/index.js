import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import { GuessProvider } from './contexts/guessContext';
import { GuessListProvider } from './contexts/guessListContext';
import { WinnersProvider } from './contexts/winnersContext';
import { UserProvider } from './contexts/userContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <GuessListProvider>
          <GuessProvider>
            <WinnersProvider>
              <App />
            </WinnersProvider>
          </GuessProvider>
        </GuessListProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


