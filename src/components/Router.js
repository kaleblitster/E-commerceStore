import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home'
import Products from './Products'
// import Details from './Details'
import Cart from './Cart'
// import Login from './Login'
import Logo from './generic.png'
import Modal from "./Modal";

export default function Path() {
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
               {/*<li>*/}
               {/*  <Link to="/Products">Products</Link>*/}
               {/*</li>*/}
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
               <Modal />
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