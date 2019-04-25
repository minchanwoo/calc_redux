import React, { Component } from 'react';

import Row from './Row';

import Show from './Show';

import './App.css';

class App extends Component {
  state = {
    rows: [
      [7,8,9],
      [4,5,6],
      [1,2,3],
      [0,'00','+'],
    ],
    showValue: '',
  };

  handleClick = (id) => {
    this.setState({
      showValue: this.state.showValue + id,
    });
  }
  
  render() {
    return (
      <div className="App">
        <Show showValue={this.state.showValue}/>
        {this.state.rows.map((row, i)=> <Row key={i} rows={row} handleClick={this.handleClick}/>)}
      </div>
    );
  }
}

export default App;
