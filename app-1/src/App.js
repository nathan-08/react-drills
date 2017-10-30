import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      array: []
    }
  this.handleChange = this.handleChange.bind(this)
  this.handleKeyPress = this.handleKeyPress.bind(this)
}
  handleChange(e){
    this.setState({ userInput: e.target.value })
  }
  handleKeyPress(e){
    if(e.key == 'Enter'){
      this.setState({
        userInput: '',
        array: [...this.state.array, this.state.userInput]
      })
    }
  }  

  
  render() {
    return (
      <div className="App">
        <input placeholder="type here" value={this.state.userInput} 
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}/>
        <div>
        <ul>{this.state.array.map(e=> <li>{e}</li> )}</ul>
        </div>
      </div>
    );
  }
}

export default App;
