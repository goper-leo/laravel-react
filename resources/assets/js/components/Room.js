import React, { component } from 'react';
import ReactDom from 'react-dom';



export default class Room extends React.Component {
    state = {action : ''};

    handleClick = () => {
        this.setState((prevState) => ({action: 'open'}));
    }

  render() {
    return (
        <li className={'dropdown ' + this.state.action} onClick={this.handleClick}>
          <a>
            Room Type
            <span className="caret"></span>
          </a>
          <div className="dropdown-menu">
            asdasd
          </div>
        </li>
    );
  }

}
