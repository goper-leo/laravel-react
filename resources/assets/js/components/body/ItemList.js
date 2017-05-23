import React, { Component } from 'react';
import Slider from 'react-slick';

class Item extends Component {

    state = {
        imagePrefix: ['a', 'b', 'c', 'd'],
        imageSuffix: ['1', '2' , '3'],
    }

    handleClick = () => {

    }

    //** Return image string
    getRandomImage = () => {
        let prefix = this.state.imagePrefix[Math.floor(Math.random() * this.state.imagePrefix.length)];
        let suffix = this.state.imageSuffix[Math.floor(Math.random() * this.state.imageSuffix.length)];
        return 'images/houses/' + prefix + '_house' + suffix + '.jpg';
    }

    getSliderImages = () => {
        for (var i = 0; i < 4; i++) {
            <div><img src={this.getRandomImage()} /></div>
        }
    }

    render() {
        let sliderSettings = {
            arrows: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const { house } = this.props;
    	return (
            <div className="col-xs-6">
                <div className="item">
                    <div className="item-image">
                        <ul className="item-slider">
                            <Slider {...sliderSettings}>
                                <div><img src={this.getRandomImage()} /></div>
                                <div><img src={this.getRandomImage()} /></div>
                                <div><img src={this.getRandomImage()} /></div>
                            </Slider>

                        </ul>
                        <i className="save-item fa fa-heart fa-3x"></i>
                    </div>
                    <div className="item-details">
                        <h4>
                            &#8369;{house.price} {house.name}
                        </h4>
                        <p className="help-block">
                            {house.description}
                        </p>
                        <div className="item-review">
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star-o"></span>
                            100 reviews
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default class ItemList extends Component {
    state = {

    };

    componentDidMount = () => {
        fetch(window.location + 'houses').then(response => {
          if (response.ok) {
            response.json().then(houses => {
                this.setState(houses);
            });
          }
        });
    }

    createItem = (house) => <Item key={house.id} house={house} />

    createItems = () => typeof (this.state.houses) !== 'undefined' ? this.state.houses.map(this.createItem) : ''

    render() {

        return (
            <div>
                {this.createItems()}
            </div>
        );
    }

}
