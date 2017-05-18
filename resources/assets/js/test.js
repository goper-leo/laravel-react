import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Room from './components/Room';
import Price from './components/Price';

class Navheader extends Component {


   handleClick = (e) => {

   };

  render() {
    return (
        <ul className="nav navbar-nav navbar-left">
          <Room />
          <Price />
        </ul>
    );
  }

}


ReactDom.render(<Navheader />, document.getElementById('third-layer'));
