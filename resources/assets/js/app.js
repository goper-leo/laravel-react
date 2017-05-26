import React, { Component } from 'react';
import ReactDom from 'react-dom';

//** Import components
import Navbar from './components/Navbar';
import Body from './components/body';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
        <div>
            <Navbar />

            <section className="main">
              <div className="container-fluid">
                <Body />
              </div>
            </section>

            <Footer />

        </div>

    );
  }

}


ReactDom.render(<App />, document.getElementById('app'));
