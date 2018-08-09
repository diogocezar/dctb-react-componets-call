import React, { Component } from 'react';

import './progress-bar.css'

class ProgressBar extends Component {
    render() {
        return (
            <div id="progress-bar" style={{'width' : `${this.props.width}vw`}}>{`${this.props.width}%`}</div>
        );
    }
}

export default ProgressBar;