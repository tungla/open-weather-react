import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CitySearchBox from './CitySearchBox/CitySearchBox';
import SideBar from './SideBar/SideBar';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div className="App container">
            <Header />
            <SideBar />
            <HashRouter>
                <Route exact path="/" component={CitySearchBox} />
            </HashRouter>
        </div>
    );
  }
}

export default App;
