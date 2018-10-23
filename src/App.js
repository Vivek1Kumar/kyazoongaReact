import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import './App.css';
import Home from './components/Home.js'
import Signup from "./pages/signup.js"
import Navbar from "./pages/NavBar.js"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Navbar/>
          <Switch>
            <Route exact path="/" pages={Home} />
            <Route  path="/Signup" components={Signup} />
          </Switch>
            <Home/>
          </div>          
      </BrowserRouter>
    );
  }
}


export default App;
