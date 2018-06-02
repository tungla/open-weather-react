/**
 * Created by tung.vu on 6/1/2018.
 */
import React, { Component } from 'react';
import CitySearchBar from './CitySearchBar'
import CitySearchResult from './CitySearchResult'

class CitySearchBox extends Component {
    constructor(props) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.state = {data: 'false', searchInput: '', main: ''};
    }

    onSearchSubmit() {
        fetch(process.env.REACT_APP_OPEN_WEATHER_ENDPOINT + '/weather?q=' + this.state.searchInput
            + '&APPID=' + process.env.REACT_APP_OPEN_WEATHER_API_KEY)
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let errorMessage = 'City not found';
                    this.setState({ data: errorMessage });
                    throw new Error('error');
                }
            })
            .then(response => response.json())
            .then(json =>{
                console.log(json);
                this.setState({ data: json, main: json.main })
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    handleSearchInputChange(value) {
        this.setState({searchInput: value})
    }

    render() {
        return(
            <div className="container" id='city-search-box'>
                <CitySearchBar
                    onSearchSubmit={this.onSearchSubmit}
                    handleSearchInputChange={this.handleSearchInputChange}
                />
                <CitySearchResult
                    cityName={this.state.data.name}
                    temp={this.state.main.temp}
                />
            </div>
        );
    }
}

export default CitySearchBox