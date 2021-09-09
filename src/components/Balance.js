import React, { Component } from 'react'

export default class Balance extends Component {
    render() {
        const sum = this.props.history.reduce((total,history)=>total+history.amount[1],0)
        return (
            <div>
                <p>${sum}</p>
            </div>
        )
    }
}
