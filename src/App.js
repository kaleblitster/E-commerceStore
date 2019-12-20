import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home'
import Products from './components/Products'
import Details from './components/Details'
import Cart from './components/Cart'
import Login from './components/Login'
import Logo from './generic.png'
import './App.css'


export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <img src={Logo} id='websiteLogo' />
              </li>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Products">Products</Link>
              </li>
              <li>
                <Link to="/Cart">Cart</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/Cart">
              <Cart />
            </Route>
            <Route path="/Products">
              <Products />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route render={()=> (<div>404 NOT FOUND</div>)} />
          </Switch>
        </div>
      </Router>
  );
}


