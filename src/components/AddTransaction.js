import React, { Component } from 'react'

export default class AddTransaction extends Component {



    onChange=(e)=>this.setState({[e.target.name]:e.target.vaue})
    render() {
        return (
            <form>
                Text: <input 
                type='text'
                name='text'
                defaultValue=''
                placeholder=' Text...'
                onChange={this.onChange}/>
                Amount: <input 
                type='number'
                name='text'
                defaultValue='text'
                placeholder=' Enter amount...'
                onChange={this.onChange}/>
            </form>
        )
    }
}
