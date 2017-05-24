import React, { Component } from 'react';
import ReactDom from 'react-dom';

import ItemList from './components/body/ItemList';
import Loading from './components/Loading';
import Map from './components/body/Map';


class Body extends Component {

    componentDidMount = () => {

    }

    render() {
        return (
            <div className="row">
              <div className="col-xs-8">

                  <Loading />
                <div className="houses-item-container">
                  <ItemList />
                </div>

                <div className="text-center paginator">

                </div>

              </div>
              <div className="col-xs-4">
                  <Map />
              </div>
            </div>
        );
    }

}


ReactDom.render(<Body />, document.getElementById('houses-item-container'));
