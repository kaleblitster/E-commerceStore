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


export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
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
          </Switch>
        </div>
      </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }
//
// function Products() {
//   return <h2>Products</h2>;
// }
//
// function Cart() {
//   return <h2>Cart</h2>;
// }

// export default App;
