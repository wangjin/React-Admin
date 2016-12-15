require('normalize.css/normalize.css');
require('styles/App.css');


import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';
import Button from 'antd/lib/button';

import 'antd/dist/antd.css';

export default class AppComponent extends React.Component {



  render() {
    return (
      <div className="index">
        <Header/>
        <SideMenu/>
        <Footer/>
        <Button type="primary">Primary</Button>

      </div>
    );
  }
}

AppComponent.defaultProps = {
};
