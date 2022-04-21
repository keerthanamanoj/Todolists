import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from './firebase/config'
import { BrowserRouter } from "react-router-dom";
import { FirebaseContext } from './store/FirebaseContext'

ReactDOM.render(
  <BrowserRouter>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>

  </BrowserRouter>,
  document.getElementById('root')
);
