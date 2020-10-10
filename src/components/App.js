import React, { Component } from 'react';
import './App.css';



class App extends Component {

  state= {
    name: '',
    click: 0
  }
  
  clickhandeler = () => {
    alert('I am Clicked')
    this.setState({
      click: this.state.click + 1
    })
}

  inputHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">

        <h1>
        <div className='container my-5'>
          <input onChange={this.inputHandler}  value={this.state.name} type='text' placeholder='Enter Your Name'/><br/>
        <button className='btn btn-success' onClick={this.clickhandeler}>
          Click Me
     </button>
        </div>

        Number of Button Clicked: {this.state.click}
     
        {this.state.name ? <p> Hello Mr,{this.state.name}</p> : '' }

        </h1>
      </div>
        
    );
  }
}

export default App;

//Button Event is inLine event Here