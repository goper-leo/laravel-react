import React, { Component } from 'react';

class List extends Component {

    state = {
        isChecked: false,
    }

    handleClick = () => {
        this.state.isChecked = !this.state.isChecked;
    }

    render() {
        const { list } = this.props;


    	return (
            <li className="list-group-item" onClick={this.handleClick}>
                {list.label}
                <p className="help-block">{list.details}</p>
                <input type="checkbox" checked={this.state.isChecked} />
            </li>
        );
    }
}

export default class Room extends Component {
    state = {
        open : false,
        items: [
            {
                label: 'Entire home',
                details: 'Lorem Ipsum set et dolor',
                id: 'entire-home'
            },
            {
                label: 'Private room',
                details: 'Lorem Ipsum set et dolor',
                id: 'private-room'
            },
            {
                label: 'Shared room',
                details: 'Lorem Ipsum set et dolor',
                id: 'shared-room'
            },
        ]
    };

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

    createList = (list) => <List key={list.id} list={list} />

    createAllListItems = () => this.state.items.map(this.createList)

    render() {

        return (
            <li className={'dropdown ' + (this.state.open == true ? 'open' : '')} onClick={this.handleClick}>
                <a>
                    Room Type
                    <span className="caret"></span>
                </a>
                <div className="dropdown-menu room-filter-dropdown">
                    <ul className="list-group">
                        {this.createAllListItems()}
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
            </li>
        );
    }

}
