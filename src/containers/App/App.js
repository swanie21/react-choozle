import React, { Component } from 'react';
import Styles from './App.scss';
import Header from '../../components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={ Styles.heroImage }></div>
        <div className={ Styles.banner }>
          <h1 className={ Styles.bannerTitle }>The Fastest Growing Digital Marketing & Advertising Platform</h1>
        </div>
        <div className={ Styles.content }></div>
      </div>
    );
  }
}

export default App;
