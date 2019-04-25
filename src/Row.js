import React from 'react';

import Cell from './Cell';

import './App.css';

export default (props) => (
    <div className="row">
        {props.rows.map((value, i)=> <Cell key={i} value={value} />)}
    </div>
);