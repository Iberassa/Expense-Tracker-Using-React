import React, { Component } from 'react';
import History from './History';

export default class AllHistory extends Component {
    render() {
        return (this.props.allHistory.map((history)=>(
            <History key={history.id} history={history}
            deleteHistory={this.props.deleteHistory}/>
            ))
        )
    }
}
