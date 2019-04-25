import React from 'react';
import { connect } from 'react-redux';

import './App.css';

const Show = (props) => (
    <div className='show'>
        {props.showNumber}
    </div>
)

export default connect(
    (state) => ({ showNumber: state.number }),
    null,
)(Show);