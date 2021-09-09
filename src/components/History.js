import React, { Component } from 'react'

export default class History extends Component {


    render() {
        const {id,amount} = this.props.history
        return (
            <div>
                <p>{amount[0]}       {amount[1]}</p>
                <button onClick={()=>this.props.deleteHistory(id)}>Delete</button>
            </div>
        )
    }
}
