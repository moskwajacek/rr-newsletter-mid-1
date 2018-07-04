import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.sayHello3 = this.sayHello3.bind(this);
  }

  sayHello() {
    // NOTE this implementation may be quite large and needs to stay in a separate function
    alert(`Hello from ${this.props.name}!`);
  }

  sayHello2 = () => {
    alert(`Hello from ${this.props.name}!`);
  }

  sayHello3 () {
    alert(`Hello from ${this.props.name}!`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.sayHello.bind(this)}>Say Hello #1</button>
        <button onClick={this.sayHello2}>Say Hello #2</button>
        <button onClick={this.sayHello3}>Say Hello #3</button>
      </div>
    );
  }
}

export default App;
