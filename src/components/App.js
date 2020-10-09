import React, { Component } from 'react';
import './App.css';
import Counter from './Counter/Counter';
import First from './First/First';


class App extends Component {

  state = {
    persons: [
      { name: 'Joyanta Kumer Sarker', email: 'jsarker96@gmail.com', address: 'Professorpara' },
      { name: 'Sarker Kumar', email: 'kumarsarker@gmail.com', address: 'Palashbari' },
      { name: 'Kumer Sarker', email: 'kumarsarker@gmail.com', address: 'Gaibandha' }
    ]
  }
  

  render() {
    return (
      <div className="App">

        {this.state.persons.map((people, index) => {
          return <First
            key={index}
            name={people.name}
            email={people.email}
            address={people.address}/>
        })}
     
        <Counter />

  
      </div>
    );
  }
}

export default App;
