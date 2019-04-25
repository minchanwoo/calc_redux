import React, { Component } from 'react';

class Cell extends Component {
    render() {
        return (
            <div className="cell" onClick={()=> this.props.handleClick(this.props.value)}>
                {this.props.value}      
            </div>
        );
    }
}

export default Cell;        