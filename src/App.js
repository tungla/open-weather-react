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
        <div className="App">
            <Header />
            <SideBar />
            <HashRouter>
                <div>
                    <Route exact path="/" component={CitySearchBox} />
                </div>
            </HashRouter>
        </div>
    );
  }
}

export default App;
