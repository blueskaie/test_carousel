import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Carousel } from 'react-responsive-carousel';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import MyCarousel from './MyCarousel';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MyCarousel></MyCarousel>
      </div>
    );
  }
}

export default App;
