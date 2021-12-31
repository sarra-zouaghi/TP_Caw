import React, { Component } from 'react'
import './De.css'
export default class De extends Component {
    render() {
        return (
            <div >
                <img className={this.props.lancer ? "rotation" : ""} src={this.props.de} alt={this.props.alt} />
            </div>
        )
    }
}