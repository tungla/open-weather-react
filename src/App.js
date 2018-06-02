import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import CitySearchBox from './CitySearchBox/CitySearchBox'

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <CitySearchBox/>
        </div>
    );
  }
}

export default App;
