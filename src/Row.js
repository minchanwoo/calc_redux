import React, { Component } from 'react';

import Cell from './Cell';

import './App.css';

class Row extends Component {
    render() {
        return (
            <div className="row">
                {this.props.rows.map((value, i)=> <Cell key={i} value={value} handleClick={this.props.handleClick} />)}
            </div>
        );
    }
}

export default Row;