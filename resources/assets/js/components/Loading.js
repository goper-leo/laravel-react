import React, { Component } from 'react';

export default class Loading extends Component {

    state = {
        display : false,
    };

    render() {

        return (
            <div style={{display: (this.state.display == true ? 'block' : 'none')}} >
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
            </div>
        );
    }

}
