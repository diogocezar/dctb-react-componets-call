import React, { Component } from 'react';

import './button.css'

class Button extends Component {
    handleClick = (type, width) => {
        const { handleClick = () => {} } = this.props
        type === 'more' ? width++ : width--
        handleClick(width)
    }
    render() {
        return (
            <button className="button" onClick={() => {this.handleClick(this.props.type, this.props.width)}}>{this.props.children}</button>
        );
    }
}

export default Button;