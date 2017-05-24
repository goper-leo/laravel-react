import React, { Component } from 'react';
import ReactDom from 'react-dom';
import heightify from 'heightify';

import ItemList from './components/body/ItemList';
import Loading from './components/Loading';
import Map from './components/body/Map';


class Body extends Component {

    state = {

    };

    componentDidMount = () => {
        fetch(window.location + 'houses').then(response => {
          if (response.ok) {
            response.json().then(houses => {
                this.setState(houses);

                heightify({
                    element: document.querySelectorAll('.item'),
                    hasImages: true,
                    destroyOnSize: 500
                })
            });
          }
        });
    }

    render() {
        return (
            <div className="row">
              <div className="col-xs-8">

                  <Loading />
                <div className="houses-item-container">
                  <ItemList houses={this.state.houses}/>
                </div>

                <div className="text-center paginator">

                </div>

              </div>
              <div className="col-xs-4">
                  <Map houses={this.state.houses}/>
              </div>
            </div>
        );
    }

}


ReactDom.render(<Body />, document.getElementById('houses-item-container'));
