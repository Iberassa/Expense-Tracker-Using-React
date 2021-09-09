import React from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import AllHistory from './components/AllHistory';
import Balance from './components/Balance';


class App extends React.Component {

  state = {
    history: [{ id: 1, amount:['cash', +500] }, { id: 2, amount:['book', -40] }, { id: 3, amount:['camera', -200] }],
  }

  deleteHistory=(id)=>{
    this.setState({history:this.state.history.filter((histor)=>histor.id!==id)})
  }


  render() {
    return (
      <div className="App">
        <h2>Expense Tracker</h2>
        <h3>Balance</h3>
        <Balance history={this.state.history}/>
        <h3>History</h3>
        <AllHistory allHistory={this.state.history} 
        deleteHistory={this.deleteHistory}/>
        <h3>Add new transaction</h3>
        <AddTransaction />
      </div>
    );
  }
}

export default App;
