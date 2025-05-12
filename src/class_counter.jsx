// src/Counter.js

import React, { Component } from 'react';
import "./Counter.css"

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div className="counter-container">
        <h1 className="counter-display">Counter: {this.state.count}</h1>
        <button onClick={this.increment} className="counter-button">Increment</button>
        <button onClick={this.decrement} className="counter-button">Decrement</button>
      </div>
    );
  }
}

export default Counter;