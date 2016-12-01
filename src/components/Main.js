require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from './Header';
import Footer from './Footer';

let yeomanImage = require('../images/yeoman.png');

export default class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};
