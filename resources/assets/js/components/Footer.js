import React, { Component } from 'react';

export default class Footer extends Component {
    state = {
        open: false,
    }

   handleClick = () => {
       let value = false;
       if (this.state.open === false) {
           value = true;
       }
       this.setState((prevState) => ({open: value}));
   }

  render() {
    return (
        <footer>
            <div className="footer-button btn btn-default" onClick={this.handleClick}>
                <span className="fa fa-globe"></span> Language and currency
            </div>

            <div className={'footer ' + (this.state.open == true ? 'open' : '')} style={{display: (this.state.open == true ? 'block' : 'none')}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-3">
                            <div className="footer-portion">
                                <div className="form-group">
                                    <select className="dropdown" name="">
                                        <option value="1">English</option>
                                        <option value="2">Chinese</option>
                                        <option value="3">Japanese</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className=" dropdown" name="">
                                        <option value="1">PHP</option>
                                        <option value="2">US Dollar</option>
                                        <option value="3">Yen Japan</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3">
                            <div className="footer-portion">
                                <h4>Onerent</h4>
                                <ul className="list-group">
                                    <li><a href="#" className="text-capitalize">Nisi mandaremus</a> </li>
                                    <li><a href="#" className="text-capitalize">Sunt possumus id</a> </li>
                                    <li><a href="#" className="text-capitalize">quorum aliqua</a> </li>
                                    <li><a href="#" className="text-capitalize">eruditionem</a> </li>
                                    <li><a href="#" className="text-capitalize">Export constias iis</a> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3">
                            <div className="footer-portion">
                                <h4>Discover</h4>
                                <ul className="list-group">
                                    <li><a href="#" className="text-capitalize">legam fore</a> </li>
                                    <li><a href="#" className="text-capitalize">eram ingeniis te</a> </li>
                                    <li><a href="#" className="text-capitalize">firmissimum</a> </li>
                                    <li><a href="#" className="text-capitalize">possumus</a> </li>
                                    <li><a href="#" className="text-capitalize">mentitum</a> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3">
                            <div className="footer-portion">
                                <h4>Hosting</h4>
                                <ul className="list-group">
                                    <li><a href="#" className="text-capitalize">Deserunt culpa</a> </li>
                                    <li><a href="#" className="text-capitalize">proident</a> </li>
                                    <li><a href="#" className="text-capitalize"> Fabulas id offendit</a> </li>
                                    <li><a href="#" className="text-capitalize">Cillum ita</a> </li>
                                    <li><a href="#" className="text-capitalize">commodo</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <button type="button" onClick={this.handleClick} className="close-footer-btn btn btn-default" name="button"><i className="fa fa-close"></i> Close</button>
                </div>
            </div>
        </footer>
    );
  }

}
