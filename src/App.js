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
import Tshirts from './components/clothing/Tshirts';
import Hoodies from './components/clothing/Hoodies';
import Shirts from './components/clothing/Shirts';
import Trousers from './components/clothing/Trousers';
import Underwear from './components/clothing/Underwear';
import Watches from './components/accessories/Watches';
import Belts from './components/accessories/Belts';
import Backpacks from './components/accessories/Backpacks';
import Hats from './components/accessories/Hats';
import Boots from './components/shoes/Boots';
import FlipFlops from './components/shoes/FlipFlops';
import ElegantShoes from './components/shoes/ElegantShoes';
import SportShoes from './components/shoes/SportShoes';

function App() {
  return (
    <Router>
      <Route path="/" component={MainNav} />
      <Route path={Routings.HOME} exact component={Home} />
      
      <Route path={Routings.CLOTHING} exact component={Clothing} />
      <Route path={Routings.T_SHIRTS} exact component={Tshirts} />
      <Route path={Routings.HOODIES} exact component={Hoodies} />
      <Route path={Routings.SHIRTS} exact component={Shirts} />
      <Route path={Routings.TROUSERS} exact component={Trousers} />
      <Route path={Routings.UNDERWEAR} exact component={Underwear} />
      
      <Route path={Routings.ACCESSORIES} exact component={Accessories} />
      <Route path={Routings.WATCHES} exact component={Watches} />
      <Route path={Routings.BELTS} exact component={Belts} />
      <Route path={Routings.BACKPACKS} exact component={Backpacks} />
      <Route path={Routings.HATS} exact component={Hats} />

      <Route path={Routings.SHOES} exact component={Shoes} />
      <Route path={Routings.BOOTS} exact component={Boots} />
      <Route path={Routings.FLIP_FLOPS} exact component={FlipFlops} />
      <Route path={Routings.ELEGANT_SHOES} exact component={ElegantShoes} />
      <Route path={Routings.SPORT_SHOES} exact component={SportShoes} />
    </Router>
  );
}

export default App;
