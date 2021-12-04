import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { CartContextProvider } from './store/cart-context';
import { AuthContextProvider } from './store/Auth-context';
ReactDOM.render(
  <AuthContextProvider>
  <CartContextProvider>
  <Router>
    <App />
    </Router>
    </CartContextProvider>
    </AuthContextProvider>
  ,
  document.getElementById('root')
);


