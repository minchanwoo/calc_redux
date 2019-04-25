import React from 'react';
import { connect } from 'react-redux';
import { addNumber } from './redux/index';

const Cell = (props) => (
    <div className="cell" onClick={() => props.changeNumber(props.value)}>
        {props.value}
    </div>
)

export default connect(
    null,
    (dispatch) => ({ changeNumber: (number) => dispatch(addNumber(number)) }) 
)(Cell);