import React, { Component, Fragment } from 'react';

import './home.css'

import ProgressBar from '../../components/ProgressBar'
import Button from '../../components/Button'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            width : 10
        }
    }
    render() {
        return (
            <Fragment>
                <h1>Simple Componnents Call Test</h1>
                <ProgressBar width={this.state.width} />
                <div className="container-buttons">
                    <Button type='more' width={this.state.width} handleClick={width => { this.setState({ width }) }}>+ More</Button>
                    <Button type='less' width={this.state.width} handleClick={width => { this.setState({ width }) }}>- Less</Button>
                </div>
            </Fragment>
        );
    }
}

export default Home;