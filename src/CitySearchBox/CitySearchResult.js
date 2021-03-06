/**
 * Created by tung.vu on 6/1/2018.
 */
import React, { Component } from 'react';
import map_icon from './map_icon.png';
import temperature from './temperature.svg';
import humidity from './humidity.png';
import windSpeed from './wind_speed.svg';
import './CitySearchResult.css';

class CitySearchResult extends Component {
    render() {
        if (this.props.cityName !== undefined) {
            return (
                <React.Fragment>
                    <div className="row city-search-result">
                        <div className="col-md-12 col-lg-12">
                        </div>
                    </div>
                    <div className="row city-info">
                        <div className="col-sm-3 col-md-3 col-lg-4" id="city-name">
                            <img src={map_icon} id="city-icon"></img>
                            {this.props.cityName}
                        </div>
                    </div>
                    <div className="row city-weather-info">
                            <div className="col-sm-3 col-md-3 col-lg-3" id="city-temp">
                                <img src={temperature} id="temperature-icon"></img>
                                {this.props.temp}
                            </div>
                            <div className='col-sm-3 col-md-3 col-lg-3' id='city-humidity'>
                                <img src={humidity} id="humidity-icon"></img>
                                {this.props.humidity}%
                            </div>
                            <div className='col-sm-3 col-md-3 col-lg-3' id='city-windspeed'>
                                <img src={windSpeed} id="windspeed-icon"></img>
                                {this.props.windSpeed}km/h
                            </div>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <div className="row">
                    <div className="col-md-12 col-lg-12" id="city-search-result">
                        <div className="row">
                            <div className="col-md-12 col-lg-12" id="error-msg">
                                City not found!
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default CitySearchResult