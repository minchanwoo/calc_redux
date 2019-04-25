import React, { Component } from 'react';

import './App.css';

class Show extends Component {
    render() {
        return (
            <div className='show'>
                {this.props.showValue}
            </div>
        );
    }
}

export default Show;