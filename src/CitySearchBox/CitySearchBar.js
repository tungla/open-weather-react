/**
 * Created by tung.vu on 6/1/2018.
 */
/**
 * Created by tung.vu on 5/31/2018.
 */
import React, { Component } from 'react';
import './CitySearchBar.css';

class CitySearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    }

    handleSearchSubmit(e) {
        this.props.onSearchSubmit();
        e.preventDefault();
    }

    handleSearchInputChange(e) {
        this.props.handleSearchInputChange(e.target.value);
    }

    render() {
        return(
            <form onSubmit={this.handleSearchSubmit}>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div id="custom-search-input">
                            <div className="input-group col-md-12 col-lg-12">
                                <input type="text" className="form-control input-lg" placeholder="City..." onChange={this.handleSearchInputChange}/>
                                <span className="input-group-btn">
                        <button className="btn btn-info btn-lg" type="button">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default CitySearchBar