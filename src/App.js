import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import Accessories from './components/accessories/Accessories';
import Clothing from './components/clothing/Clothing';
import MainNav from './components/nav/MainNav';
import Shoes from './components/shoes/Shoes';
import Routings from './constants/routings';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Route path="/" component={MainNav} />
      <Route path={Routings.HOME} component={Home} />
      <Route path={Routings.CLOTHING} component={Clothing} />
      <Route path={Routings.ACCESSORIES} component={Accessories} />
      <Route path={Routings.SHOES} component={Shoes} />
    </Router>
  );
}

export default App;
