import React, { Component } from 'react';
import Styles from './App.scss';
import Header from '../../components/Header/Header';

const heroImage = 'https://choozle.com/img/homepage/homepage-hero-bg.jpg';

class App extends Component {
  render() {
    return (
      <div className={ Styles.app }>
        <Header />
        <img className={ Styles.hero } src={ heroImage } alt='hero' />
      </div>
    );
  }
}

export default App;
