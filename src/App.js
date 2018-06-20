import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  sayHello() {
    // NOTE this implementation may be quite large and needs to stay in a separate function
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
        <button onClick={this.sayHello}>Say Hello #1</button>
        <button>Say Hello #2</button>
        <button>Say Hello #3</button>
      </div>
    );
  }
}

export default App;
