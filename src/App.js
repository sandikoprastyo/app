import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <section className="wrapper">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </section>
      </div>
    );
  }
}

class Title extends Component {
  render() {
    return (
      <div id="title">
        <span className="animated fadeInLeft">Sandiko Prastyo</span>
        <br />
        <span className="animated fadeInLeft">Frontend Developer</span>
      </div>
    );
  }
}

export default App;
