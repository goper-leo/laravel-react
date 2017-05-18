import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class Price extends Component {
    state = {open : false};

    handleClick = (e) => {
        let value  = false;

        if(ReactDom.findDOMNode(this).contains(e.target)) {
            value = true;
        }

        this.setState((prevState) => ({open: value}));
    }

    componentDidMount = () => {
        window.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount() {
        // make sure you remove the listener when the component is destroyed
        document.removeEventListener('click', this.handleClick, false);
    }

  render() {
    return (
        <li className={'dropdown ' + (this.state.open == true ? 'open' : '')} onClick={this.handleClick}>
          <a>
            Price range
            <span className="caret"></span>
          </a>
          <div className="dropdown-menu">
            Price range filter
          </div>
        </li>
    );
  }

}
