import React, { Component } from 'react';
import Slider from 'react-slick';

class Item extends Component {

    state = {
        imagePrefix: ['a', 'b', 'c', 'd'],
        imageSuffix: ['1', '2' , '3'],
        starRatings: [1, 2, 3, 4, 5],
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
        for (let i = 0; i < 4; i++) {
            <div><img src={this.getRandomImage()} /></div>
        }
    }

    getRandomRating = () => {
        let rating = this.state.starRatings[Math.floor(Math.random() * this.state.starRatings.length)];
        let ratings = [];

        for (let i=0; i < rating; i++) {
            ratings.push(<span key={i} className="fa fa-star"></span>);
        }

        for (let i= rating; i < 5; i++) {
            ratings.push(<span key={i} className="fa fa-star-o"></span>);
        }

        return ratings;
    }

    itemHover = () => {

        this.props.onHoverFunction({lat: parseFloat(this.props.lat), lng: parseFloat(this.props.long)});
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
                <div className="item" onMouseOver={this.itemHover}>
                    <div className="item-image">
                        <div className="item-slider">
                            <Slider {...sliderSettings}>
                                <div><img src={this.getRandomImage()} /></div>
                                <div><img src={this.getRandomImage()} /></div>
                                <div><img src={this.getRandomImage()} /></div>
                            </Slider>

                        </div>
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
                            {this.getRandomRating()}
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

    }

    onHoverFunction = (position) => {
        this.props.onHoverFunction(position);
    }

    createItem = (house) => <Item key={house.id} house={house} lat={house.lat} long={house.long} onHoverFunction={this.onHoverFunction} />

    createItems = (houses) => typeof (houses) !== 'undefined' ? houses.map(this.createItem) : ''

    render() {

        return (
            <div>
                {this.createItems(this.props.houses)}
            </div>
        );
    }

}
