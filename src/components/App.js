import React, { Component } from 'react';
import './App.css';
import Staless from './StatelessComponent';



class App extends Component {


  render() {
    return (
      <div className="App">

        <Staless name='React'/>
      </div>
        
    );
  }
}

export default App;

