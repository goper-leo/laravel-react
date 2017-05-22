import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import RangeSlider from 'react-dual-rangeslider';

export default class Price extends Component {
    state = {
        open : false,
        min : 100,
        max : 2000,
        minRange : 100,
        minValue : 100,
        maxValue : 2000,
        step : 100,
        className : 'range-input-container',

    };

    handleClick = (e) => {
        let value  = false;

        if(ReactDom.findDOMNode(this).contains(e.target)) {
            value = true;
        }

        this.setState((prevState) => ({open: value}));
    };

    changeValue = () => {

    }

    onRangeChange = (state)=>{
        this.state.maxValue = state.max;
        this.state.minValue = state.min;
    }

    componentDidMount = () => {
        window.addEventListener('click', this.handleClick, false);
    };

    componentWillUnmount() {
        // make sure you remove the listener when the component is destroyed
        document.removeEventListener('click', this.handleClick, false);
    };

    render() {
        return (
            <li className={'dropdown ' + (this.state.open == true ? 'open' : '')} onClick={this.handleClick}>
                <a>
                    Price range
                    <span className="caret"></span>
                </a>
                <div className="dropdown-menu">
                    <RangeSlider
                        min={this.state.min}
                        max={this.state.max}
                        minRange={this.state.minRange}
                        minValue={this.state.minValue}
                        maxValue={this.state.maxValue}
                        onChange={this.onRangeChange}
                        step={this.state.step}
                        className={this.state.className}
                    />
                    <ul className="list-group">
                        <li className="inline-list">
                            <a href="#">Cancel</a>
                        </li>
                        <li className="inline-list pull-right">
                            <a href="#">Apply</a>
                        </li>
                    </ul>
                </div>
            </li>
        );
    }

}
