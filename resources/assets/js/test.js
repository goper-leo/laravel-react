import React, { component } from 'react';
import ReactDom from 'react-dom';

import Room from './components/Room';

class Navheader extends React.Component {


   handleClick = (e) => {

   };

  render() {
    return (
        <ul className="nav navbar-nav navbar-left">
          <Room />

          <li className="dropdown">
            <a>
              Instant Book
              <span className="caret"></span>
            </a>
            <div className="dropdown-menu" aria-labelledby="dLabel">
              asdasd
            </div>
          </li>
          <li className="dropdown">
            <a>
              More Filters
              <span className="caret"></span>
            </a>
            <div className="dropdown-menu" aria-labelledby="dLabel">
              asdasd
            </div>
          </li>
        </ul>
    );
  }

}


ReactDom.render(<Navheader />, document.getElementById('third-layer'));
