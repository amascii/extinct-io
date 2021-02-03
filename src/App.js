import React, { Component } from 'react';
import './App.css';
import Total from './Total/Total';

class App extends Component {

  state = {
    age: 23,
    showForm: true,
    pessimist: false,
  };

  calculate = () => {
    this.setState({showForm: false});
  }

  optionSelected = event => {
    const value = (isNaN(event.target.value)) ? this.state.age : new Date().getFullYear() - parseInt(event.target.value);
    this.setState({age: value});
  }

  reset = () => {
    this.setState({age: 23, showForm: true, optimisit: false});
  }

  pessimistChanged = () => {
    this.setState({pessimist: !this.state.pessimist});
  }

  render() {
    let form = null;
    let result = null;

    if (this.state.showForm) {
      // generate birth years array
      const maxYear = 2020;
      const minYear = 1990;

      let options = [];

      for (let i = maxYear; i >= minYear; i--) {
        options.push(i);
      }

      // set form
      form = (
        <div className="form-group w-75">
          <div>
            <input type="checkbox" className="form-check-input" id="pessimistCheck" onChange={this.pessimistChanged}></input>
            <label className="form-check-label" htmlFor="pessimistCheck">Pessimist?</label>
          </div>
          <label htmlFor="yearField">Enter your birth year:</label>
          <select className="custom-select" id="options" onChange={this.optionSelected}>
            <option defaultValue>Choose...</option>
            {options.map(opt => <option value={opt} key={opt}>{opt}</option>)}
          </select>
          <button className="btn btn-dark btn-lg btn-block mt-3" onClick={this.calculate}>Calculate</button>
        </div>
      );
    }
    else {
      // set result
      result = (
        <Total 
        pessimist={this.state.pessimist}
        age={this.state.age}
        reset={this.reset}/>
      );
    }

    return (
      <div className="App">
        <header className="App-header font-weight-bold">
          {form}
          {result}
        </header>
      </div>
    );
  }
}

export default App;
