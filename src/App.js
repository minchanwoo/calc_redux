import React from 'react';

import Row from './Row';

import Show from './Show';

import './App.css';

const ROWS = [
  [7,8,9],
  [4,5,6],
  [1,2,3],
  [0,'00','+'],
];

export default () => (
  <div className="App">
    <Show />
    {ROWS.map((row, i)=> <Row key={i} rows={row}/>)}
  </div>
);
