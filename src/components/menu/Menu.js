/**
 * Created by 王金 on 2016/12/9.
 */

import React from 'react'
import MenuItem from './MenuItem'

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      menudata: [
        {'name': 'menu1', 'url': '1.html'},
        {'name': 'menu2', 'url': '2.html'},
        {'name': 'menu3', 'url': '3.html'},
        {'name': 'menu4', 'url': '4.html'}
      ]
    }
  }

  getMenuData() {

  }


  render() {

    let menuItems = this.state.menudata.map(menu => {
      return (
        <MenuItem name={menu.name} url={menu.url}/>
      );
    });
    return (<div>{menuItems}</div>);
  }
}
