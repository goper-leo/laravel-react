import React, { Component } from 'react';
import ReactDom from 'react-dom';


class Roomfilter extends Component {

    state = {
        items: [
            {
                label: 'Entire home',
                details: 'Lorem Ipsum set et dolor'
            },
            {
                label: 'Entire home',
                details: 'Lorem Ipsum set et dolor'
            },
        ]
    };

    handleClick = () => {
    	
    }

    render() {
    	return (
            <div className="dropdown-menu room-filter-dropdown">
                <ul className="list-group">
                    <li className="list-group-item">
                        Entire home
                        <p className="help-block">Lorem ipsum sit el </p>
                        <input type="checkbox" className="" id="entire-home"/>
                    </li>
                    <li className="list-group-item">
                        Private room
                        <p className="help-block">Lorem ipsum sit el </p>
                        <input type="checkbox" className="" id="private-room" />
                    </li>
                    <li className="list-group-item">
                        Shared room
                        <p className="help-block">Lorem ipsum sit el </p>
                        <input type="checkbox" className="" id="shared-room" />
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="inline-list">
                        <a href="#">Cancel</a>
                    </li>
                    <li className="inline-list pull-right">
                        <a href="#">Apply</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default class Room extends Component {
    state = {open : false};

    handleClick = (e) => {
        let value  = false;

        if(ReactDom.findDOMNode(this).contains(e.target)) {
            value = true;
        }

        this.setState((prevState) => ({open: value}));
    };

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
                    Room Type
                    <span className="caret"></span>
                </a>
                <Roomfilter />
            </li>
        );
    }

}
