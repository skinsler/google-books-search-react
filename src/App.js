import React, { Component } from "react";
import "./App.css";
import Jumbo from './components/Jumbotron';
import {BrowserRouter, Route} from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Search from './pages/Search';
import Saved from './pages/Saved';

class App extends Component {
  render() {
  return (
    <div className="App">
          <BrowserRouter>
            <NavigationBar></NavigationBar>
            <Jumbo></Jumbo>
            <Route exact path = "/" component ={Search} />
            <Route exact path = "/search" component={Search} />
            {/* <Route exact path = "/saved" component={Saved} /> */}
        </BrowserRouter>
    </div>
  );
}
}

export default App;
